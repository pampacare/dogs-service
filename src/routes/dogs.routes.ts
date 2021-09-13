/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/indent */
import { Router } from 'express'

import { CreateDogController } from '../controllers/dogs'

const dogsRoutes = (router: Router): void => {
    router.post('/create_dog', (req, res) => {
        const create = new CreateDogController()
        create.execute(req, res)
    })
}

export { dogsRoutes }
