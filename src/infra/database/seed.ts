import { reset, seed } from 'drizzle-seed'

import { sql, database } from './drizzle.ts'

import * as schema from './schema.ts'

await reset(database, schema)
await seed(database, schema).refine((f) => {
  return {
    rooms: {
      count: 60,
      columns: {
        id: f.uuid(),
        name: f.companyName(),
        description: f.loremIpsum(),
        createdAt: f.timestamp()
      }
    }
  }
})

await sql.end()
console.log('Database seeded')
