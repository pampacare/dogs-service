import { Router } from 'express'
import { UpdateAddressOwner } from '../controllers/owners/UpdateAddresOwner'
import CreateOwnerController from '../controllers/owners/CreateOwnerController'
import { ListOwnersController } from '../controllers'

const createOwnerController = new CreateOwnerController()
const updateAddressOwner = new UpdateAddressOwner()
const listOwners = new ListOwnersController()

const ownerRoutes = (router: Router): void => {
  router.post('/owner', createOwnerController.execute.bind(CreateOwnerController))
  router.put('/owner/:id', updateAddressOwner.execute.bind(UpdateAddressOwner))
  router.get('/owner', listOwners.execute.bind(ListOwnersController))
}

export { ownerRoutes }
