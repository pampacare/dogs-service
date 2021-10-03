import { Request, Response } from 'express'
import { prisma } from '../../services'
import { validateRequiredFields } from '../../validators'

class UpdateAddressOwner {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      const idOwner = request.params.id
      const { lat, long, street, areaId, neighborhood, complement } = request.body
      const fields = [
        'lat',
        'long',
        'street',
        'areaId',
        'neighborhood'
      ]
      await validateRequiredFields(request, fields)
      let owner = await prisma.owner.findFirst({
        where: { id: idOwner }
      })
      if (!owner) {
        throw new Error('Proprietário não existe')
      }
      owner = await prisma.owner.update({
        where: { id: idOwner },
        data: {
          lat: lat,
          long: long,
          street: street,
          area_id: parseInt(areaId),
          neighborhood: neighborhood,
          complement: complement
        }
      })
      return response.status(201).json({ message: 'Endereço atualizado com sucesso!!' })
    } catch (error: any) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { UpdateAddressOwner }
