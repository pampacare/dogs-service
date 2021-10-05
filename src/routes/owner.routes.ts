import { Router } from 'express'
import { UpdateAddressOwner, ListOwnersController } from '../controllers/owners'
import CreateOwnerController from '../controllers/owners/CreateOwnerController'

const createOwnerController = new CreateOwnerController()
const listOwners = new ListOwnersController()
const updateAddressOwner = new UpdateAddressOwner()

const ownerRoutes = (router: Router): void => {
  router.post('/owner', createOwnerController.execute.bind(CreateOwnerController))
  router.put('/owner/:id', updateAddressOwner.execute.bind(UpdateAddressOwner))
  router.get('/owners', listOwners.execute.bind(ListOwnersController))
}

export { ownerRoutes }
