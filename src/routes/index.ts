import { Router } from 'express'
import { dogsRoutes } from './dogs.routes'

const router = Router()

dogsRoutes(router)

export { router }
