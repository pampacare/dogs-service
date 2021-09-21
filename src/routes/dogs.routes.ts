import { Router } from 'express'
import { ListDogsController } from '../controllers/dogs/ListDogsController'

const listDogs = new ListDogsController()

const dogsRoutes = (router: Router): void => {
  router.get(
    '/api/dogs',
    listDogs.execute.bind(ListDogsController)
  )
  // router.post('/api/subscriptions', authMiddleware, changeSubscription.execute.bind(ChangeSubscriptionPlanController))
  // router.get('/api/subscriptions', adminMiddleware, listAllSubscriptions.execute.bind(ListAllSubscriptionsController))
  // router.delete('/api/subscription', adminMiddleware, destroy.execute.bind(DestroySubscriptionController))
}

export { dogsRoutes }
