import { Router } from 'express'
import { UpdateAddressOwner } from '../controllers/users/UpdateAddresOwner'

const ownerRoutes = (router: Router): void => {
  router.put('/owner/:id', async (req, res) => {
    const updateAddressOwner = new UpdateAddressOwner()
    await updateAddressOwner.execute(req, res)
  })
}

export { ownerRoutes }
