import { Request, Response } from 'express'
import { validateRequiredFields } from '../../validators'
import { prisma } from '../../services'

class CreateOwnerController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      await validateRequiredFields(request, ['name', 'neighborhood', 'street', 'lat', 'long', 'complement', 'areaId'])
      const { id, name, neighborhood, street, lat, long, complement, areaId } = request.body

      const ownerCreation = await prisma.owner.create({
        data: {
          id: id,
          name: name,
          neighborhood: neighborhood,
          street: street,
          lat: lat,
          long: long,
          complement: complement,
          area_id: areaId
        }
      })

      return response.status(201).json({
        body: ownerCreation,
        message: 'Proprietário cadastrado com sucesso'
      })
    } catch (error: any) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export default CreateOwnerController
