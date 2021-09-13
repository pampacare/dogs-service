import { Router } from 'express'
import { dogRoutes } from './dogRoutes'

const router = Router()

dogRoutes(router)

export { router }
