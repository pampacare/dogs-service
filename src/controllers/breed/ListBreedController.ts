import { Request, Response } from 'express'
import {
  prisma,
  presetQueryFields,
  convertToContains,
  convertToNumber
} from '../../services'

class ListBreedController {
  async execute(request: Request, response: Response): Promise<Response> {
    try {
      const breeds = await prisma.breed.findMany();
      return response.status(200).json(breeds)
    } catch (erro) {
      return response.status(400).json({
        message: erro
      })
    }
  }
}
export { ListBreedController }
