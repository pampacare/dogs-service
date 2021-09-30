import { Router } from 'express'
import { ownerRoutes } from './owner.routes'

const router = Router()

ownerRoutes(router)

export { router }
