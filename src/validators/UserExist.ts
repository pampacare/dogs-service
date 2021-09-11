import { prisma } from '../services'

export const userExist = async (userId: any): Promise<any> => {
  const user = await prisma.user.findFirst({
    where: { id: userId }
  })
  return user
}
