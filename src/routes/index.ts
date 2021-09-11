import { Router } from 'express'
import { userRoutes } from './users.routes'

const router = Router()

userRoutes(router)

export { router }
