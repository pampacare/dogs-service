
import { Request, Response } from 'express'
import { prisma } from '../../services'

class UpdateDogController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const dogId = request.params.id
      const { isDead, wearCollar } = request.body

      const dog = await prisma.dog.findFirst({
        where: { id: dogId }
      })
      if (!dog) {
        throw new Error('Cão não existe')
      }
      const newDog = await prisma.dog.update({
        where: { id: dog.id },
        data: {
          is_dead: isDead,
          wear_collar: wearCollar
        }
      })
      return response.status(201).json(newDog)
    } catch (error: any) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { UpdateDogController }
