/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/indent */
import { prisma } from '../../services'
import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid';

class CreateDogController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            const { name, bornYear, wearCollar, genderId, ownerId, breedId } = request.body

            const owner = await prisma.owner.findFirst({
                where: { id: ownerId }
            })
            if (!owner) {
                throw new Error('Proprietário não existe')
            }

            const createDog = await prisma.dog.create({
                data: {
                    id: uuidv4(),
                    name: name,
                    born_year: bornYear,
                    wear_collar: wearCollar,
                    is_dead: false,
                    owner: { connect: { id: ownerId } },
                    breed: { connect: { id: breedId } },
                    gender: { connect: { id: genderId } }
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