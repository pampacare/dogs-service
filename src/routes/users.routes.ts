import { Router } from 'express'

import {
  CreateUserController,
  ListUsersController,
  DestroyUserController
} from '../controllers'

// const create = new CreateUserController()
// const list = new ListUsersController()
// const destroy = new DestroyUserController()

const userRoutes = (router: Router): void => {
  router.get('/hello', (req, res) => {
    res.json({ ok: true })
  })
}

export { userRoutes }
