
import { Router } from 'express'
import { UpdateDogController } from '../controllers/dogs/UpdateDogController'

const dogRoutes = (router: Router): void => {
  router.put('/dog/:id', (req, res) => {
    const updateDogController = new UpdateDogController()
    updateDogController.execute(req,res)
  })
}

export { dogRoutes }
