import 'reflect-metadata'
import { createKoaServer } from "routing-controllers"
import setupDb from './db'
import CompanyController from './companies/controller';
// import * as dotenv from 'dotenv'

// dotenv.config()

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    CompanyController
  ]
})

setupDb()
  .then(_ =>
    app
      .listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))