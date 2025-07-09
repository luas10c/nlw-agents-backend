import { join } from 'node:path'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

import { database } from './drizzle.ts'

migrate(database, {
  migrationsFolder: join(import.meta.dirname, 'migrations'),
  migrationsSchema: 'public'
}).then(() => process.exit(1))
