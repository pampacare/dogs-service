import { Request, Response } from 'express'
import { prisma } from '../../services'

class DestroyUserController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const idExist = await prisma.user.findFirst({
        where: { id: id }
      })

      if (!idExist) {
        throw new Error('This id not exist. Try change this :(')
      }

      const deletedUser = await prisma.user.delete({
        where: { id: id }
      })
      return response.status(200).json({
        deletedUser,
        message: 'User successfully deleted :)'
      })
    } catch (error) {
      return response.status(401).json({
        message: error.message
      })
    }
  }
}

export { DestroyUserController }
