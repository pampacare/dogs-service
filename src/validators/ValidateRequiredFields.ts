import { Request } from 'express'
import { MissingParamError } from '../errors'

export const validateRequiredFields = async (request: Request, requiredFields: string[]): Promise<void> => {
  for (const field of requiredFields) {
    if (!request.body[field]) {
      throw new MissingParamError(field)
    }
  }
}
