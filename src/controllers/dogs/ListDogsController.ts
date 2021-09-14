import { Request, Response } from 'express'
import {
  prisma,
  presetQueryFields,
  convertToContains,
  convertToNumber
} from '../../services'

class ListDogsController {
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

      const owner = await prisma.owner.findMany({
        where: where,
        select: {
          dog: true
        }
      })
      return response.json(owner)
    } catch (erro) {
      return response.status(400).json({
        message: erro
      })
    }
  }
}
export { ListDogsController }
