import { Request, Response } from 'express'
import {
  prisma,
  presetQueryFields,
  convertToContains,
  convertToNumber
} from '../../services'

class ListOwnersController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      let where = { ...request.query }

      where = presetQueryFields(where, [
        'name',
        'neighborhood',
        'street',
        'area_id'
      ])
      where = convertToNumber(where, 'area_id')
      where = convertToContains(where, ['name', 'neighborhood', 'street'])

      const dogs = await prisma.owner.findMany({
        where: where,
        select: {
          name: true,
          street: true,
          neighborhood: true,
          dog: true
        }
      })
      return response.json(dogs)
    } catch (erro) {
      return response.status(400).json({
        message: erro
      })
    }
  }
}
export { ListOwnersController }
