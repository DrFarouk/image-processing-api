import express from 'express'
import imagesRoutes from './api/images'
import logger from '../middleware/logger'

const routes = express.Router()

routes.use(logger)

routes.use('/images', imagesRoutes)

export default routes
