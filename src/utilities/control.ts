import sharp from 'sharp'
import { imgOutputDir, imgDir } from './const'

const resizeImg = async (
  width: number,
  height: number,
  filename: string
): Promise<void> => {
  const originalImagePath = `${imgDir}/${filename}.jpg`
  const outputImagePath = imgOutputDir + `${filename}_${width}_${height}.jpg`
  try {
    await sharp(originalImagePath)
      .resize(Number(width), Number(height))
      .toFile(outputImagePath)
  } catch (err) {
    throw new Error('error happened during resizing')
  }
}

export default resizeImg
