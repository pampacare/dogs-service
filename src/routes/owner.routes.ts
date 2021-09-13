import { response, Router } from 'express'
import { UpdateAddressOwner } from '../controllers/users/UpdateAddresOwner';
const ownerRoutes = (router: Router): void => {
    router.put('/owner/:id', (req, res) => {
        const updateAddressOwner = new UpdateAddressOwner();
        updateAddressOwner.execute(req,res)
        
    });
   
  }

  export {ownerRoutes}