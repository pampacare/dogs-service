import { Router } from 'express'
import { CreateDogController } from '../controllers/dogs/CreateDogController'
import { ListDogsController } from '../controllers/dogs/ListDogsController'

const createDog = new CreateDogController()
const listDogs = new ListDogsController()

const dogsRoutes = (router: Router): void => {
  router.post('/dogs', createDog.execute.bind(CreateDogController))
  router.get('/dogs', listDogs.execute.bind(ListDogsController))
}

export { dogsRoutes }
