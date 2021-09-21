import { Router } from 'express'
import { UpdateAddressOwner } from '../controllers/owners/UpdateAddresOwnerController'
import CreateOwnerController from '../controllers/owners/CreateOwnerController'

const ownerRoutes = (router: Router): void => {
  router.post('/owner', async (req, res) => {
    const createOwnerController = new CreateOwnerController()
    await createOwnerController.execute(req, res)
  })

  router.put('/owner/:id', async (req, res) => {
    const updateAddressOwner = new UpdateAddressOwner()
    await updateAddressOwner.execute(req,res)
  })
}

export { ownerRoutes }
