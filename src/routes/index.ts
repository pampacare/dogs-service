import { Router } from 'express'
import { dogsRoutes } from './dogs.routes'
import { ownerRoutes } from './owner.routes'

const router = Router()

dogsRoutes(router)
ownerRoutes(router)

export { router }
