import type { Application } from 'express'

import { getRooms } from './get-rooms.ts'

export function routes(app: Application) {
  getRooms(app)
}
