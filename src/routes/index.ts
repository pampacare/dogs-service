import { Request, Response, Router } from 'express'
import { dogsRoutes } from './dogs.routes'
import { ownerRoutes } from './owner.routes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'New Message!'
  })
})
dogsRoutes(router)
ownerRoutes(router)

export { router }
