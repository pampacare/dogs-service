import { Request, Response } from 'express'

export default interface Controller {
  execute: (request: Request, response: Response) => Promise<Response>
}
