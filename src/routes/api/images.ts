import { Request, Response, Router } from 'express'
import { existsSync } from 'fs'

import resizeImg from '../../utilities/control'
import { imgDir, imgOutputDir } from '../../utilities/const'
import checkForCaching from '../../utilities/caching'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
  const width: number = parseInt(req.query.width as string, 10)
  const height: number = parseInt(req.query.height as string, 10)
  const filename: string = req.query.filename as string
  const inputImg = `${imgDir}/${filename}.jpg`
  const outputImg = imgOutputDir + `${filename}_${width}_${height}.jpg`

  if (isNaN(Number(width)) || isNaN(Number(height)) || !filename || !width || !height) {
    return res.status(400).send('Image name & parameters is required')
  }

  const fileExist = (imageLocation: string): boolean => {
    return existsSync(imageLocation)
  }

  if (!fileExist(inputImg)) {
    return res.status(404).send('image not found')
  }

  if (await checkForCaching(outputImg)) {
    res.sendFile(outputImg)
  } else {
    await resizeImg(width, height, filename)
    res.sendFile(outputImg)
  }
})

export default routes
