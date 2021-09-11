import { Request, Response } from 'express'
import { prisma } from '../../services'
import { validateRequiredFields } from '../../validators'

class UpdatePushNotificationTokenController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      await validateRequiredFields(request, ['pushNotificationToken'])
      const { pushNotificationToken } = request.body

      await prisma.user.update({
        where: {
          id: request.userId
        },
        data: {
          push_notification_token: pushNotificationToken
        }
      })
      return response.json({ message: 'push notification token updated' })
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}

export { UpdatePushNotificationTokenController }
