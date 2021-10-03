import { Router } from 'express'
import { ownerRoutes } from './owner.routes'
import { dogsRoutes } from './dogs.routes'

const router = Router()

ownerRoutes(router)
dogsRoutes(router)

export { router }
