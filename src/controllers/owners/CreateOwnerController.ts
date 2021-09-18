import { Controller } from '../../protocols'
import { Request, Response } from 'express'
import { v4 } from 'uuid'
import { validateRequiredFields } from '../../validators'
import { prisma } from '../../services'

class CreateOwnerController implements Controller {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      await validateRequiredFields(request, ['name', 'neighborhood', 'street', 'lat', 'long', 'area'])
      const { name, neighborhood, street, lat, long, area } = request.body

      const getArea = await prisma.area.findFirst({
        where: {
          description: area
        },
        select: {
          id: true
        }
      })

      if (!getArea) {
        throw new Error('Área não existe')
      }

      const id: string = v4()

      const ownerCreation = await prisma.owner.create({
        data: {
          id: id,
          name: name,
          neighborhood: neighborhood,
          street: street,
          lat: lat,
          long: long,
          area_id: getArea.id
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
