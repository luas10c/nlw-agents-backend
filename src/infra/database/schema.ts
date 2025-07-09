import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const tb_rooms = pgTable('rooms', {
  id: uuid().primaryKey(),
  name: text().notNull(),
  description: text(),
  updatedAt: timestamp('updated_at'),
  createdAt: timestamp('created_at').notNull()
})
