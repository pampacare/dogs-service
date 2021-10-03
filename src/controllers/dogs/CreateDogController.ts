import { prisma } from '../../services'
import { Request, Response } from 'express'
import { validateRequiredFields } from '../../validators'

class CreateDogController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      await validateRequiredFields(request, ['name', 'bornYear', 'wearCollar', 'sexId', 'ownerId', 'breedId'])

      const { id, name, bornYear, wearCollar, sexId, ownerId, breedId } =
        request.body

      const owner = await prisma.owner.findFirst({
        where: { id: ownerId }
      })

      if (!owner) {
        throw new Error('Proprietário não existe')
      }

      const createDog = await prisma.dog.create({
        data: {
          id: id,
          name: name,
          born_year: bornYear,
          wear_collar: wearCollar,
          is_dead: false,
          owner_id: ownerId,
          breed_id: breedId,
          sex_id: sexId
        }
      })

      return response.status(201).json({
        body: createDog,
        message: 'Cão cadastrado com sucesso'
      })
    } catch (error: any) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}

export { CreateDogController }
