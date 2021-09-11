import { Request, Response } from 'express'
import { prisma } from '../../services'

class GetUserDataController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const userData = await prisma.user.findUnique({
        where: { id: request.userId },
        select: {
          id: true,
          name: true,
          email: true,
          push_notification_token: true
        }
      })

      return response.status(200).json(
        userData
      )
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { GetUserDataController }
