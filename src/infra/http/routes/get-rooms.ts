import type { Application } from 'express'

import { database } from '../../database/drizzle.ts'

import { tb_rooms } from '../../database/schema.ts'

export function getRooms(app: Application) {
  app.get('/rooms', async function (request, response) {
    const rooms = await database
      .select()
      .from(tb_rooms)
      .orderBy(tb_rooms.createdAt)

    return void response.status(200).json(rooms)
  })
}
