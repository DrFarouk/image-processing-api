import express from 'express'

const logger = (req: express.Request, res: express.Response, next: () => void): void => {
  console.log(`User visted ${req.url}.`)
  next()
}

export default logger
