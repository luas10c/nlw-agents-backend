import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema.ts'

import { env } from '../../common/env.ts'

export const sql = postgres(env.DATABASE_URL)
export const database = drizzle(sql, {
  logger: true,
  casing: 'snake_case',
  schema
})
