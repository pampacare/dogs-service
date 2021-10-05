import { Router } from 'express'
import { ListBreedController } from '../controllers/breed/ListBreedController'

const listBreedController = new ListBreedController()

const breedRoutes = (router: Router): void => {
  router.get('/breed', listBreedController.execute.bind(ListBreedController))
}

export { breedRoutes }
