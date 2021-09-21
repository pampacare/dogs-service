import { Router } from 'express'
import { ListDogsController } from '../controllers/dogs/ListDogsController'

const listDogs = new ListDogsController()

const dogsRoutes = (router: Router): void => {
  router.get('/api/dogs', listDogs.execute.bind(ListDogsController))
}

export { dogsRoutes }
