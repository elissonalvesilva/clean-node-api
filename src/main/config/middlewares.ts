import { cors } from './middlewares/cors'
import { bodyParser } from './middlewares/body-parser'
import { Express } from 'express'
import { contentType } from './middlewares/content-type'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
