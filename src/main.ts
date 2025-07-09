import express from 'express'
import cors from 'cors'

import { routes } from './infra/http/routes/index.ts'

import { sql } from './infra/database/drizzle.ts'

import { env } from './common/env.ts'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))

app.disable('x-powered-by')

routes(app)

app.get('/health', async function (request, response) {
  const data = await sql`SELECT 1=1`
  console.log(data)

  return void response.status(200).json({ status: 200, message: 'Healthy' })
})

app.listen(env.PORT, '0.0.0.0')
