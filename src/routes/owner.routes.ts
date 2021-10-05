import { Router } from 'express'
import { UpdateAddressOwner } from '../controllers/owners/UpdateAddresOwner'
import CreateOwnerController from '../controllers/owners/CreateOwnerController'

const createOwnerController = new CreateOwnerController()
const updateAddressOwner = new UpdateAddressOwner()

const ownerRoutes = (router: Router): void => {
  router.post('/owner', createOwnerController.execute.bind(CreateOwnerController))
  router.put('/owner/:id', updateAddressOwner.execute.bind(UpdateAddressOwner))
}

export { ownerRoutes }
