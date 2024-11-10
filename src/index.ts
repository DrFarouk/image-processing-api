import express, { Application } from 'express'

import routes from './routes'

const PORT = 4000
// create server
const app: Application = express()

// routing path for /api
app.use('/api', routes)

// start server
app.listen(PORT, () => {
  console.log(`Server started at prot:${PORT}`)
})

export default app
