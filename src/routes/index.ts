import { Request, Response, Router } from 'express'
import { dogsRoutes } from './dogs.routes'
import { ownerRoutes } from './owner.routes'
import { breedRoutes } from './breed.routes'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'New teste!'
  })
})

dogsRoutes(router)
ownerRoutes(router)
breedRoutes(router)
export { router }
