import fs from 'fs-extra'

const checkForCaching = async (filepath: string): Promise<boolean> => {
  const isProcessedImgExists: boolean = await fs.pathExists(filepath)
  return isProcessedImgExists
}

export default checkForCaching
