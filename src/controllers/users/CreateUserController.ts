import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { prisma } from '../../services'
import { accessTokenLife, authAccessToken, authRefreshToken, refreshTokenLife } from '../../config'
import { isValid, validateName, validateRequiredFields } from '../../validators'

class CreateUserController {
  async execute (request: Request, response: Response): Promise<Response> {
    try {
      await validateRequiredFields(request, ['cpf', 'name', 'email', 'password', 'phoneNumber', 'birthdayDate'])

      const { cpf, name, email, password, phoneNumber, birthdayDate, pushNotificationToken } = request.body

      const formattedCpf = isValid(cpf)

      const formattedTelephone = phoneNumber.replace(/\D/g,'')

      if (!validateName(name)) {
        throw new Error('The user name is invalid')
      }

      const userAlreadyExists = await prisma.user.findUnique({
        where: { cpf: formattedCpf }
      })

      if (userAlreadyExists) {
        throw new Error('CPF already registered :(')
      }

      const emailAlreadyExists = await prisma.user.findFirst({
        where: { email: email }
      })

      if (emailAlreadyExists) {
        throw new Error('Email already registered ! ')
      }

      const salt = bcrypt.genSaltSync(12)
      const hashPassword = bcrypt.hashSync(password, salt)

      const createdUser = await prisma.user.create({
        data: {
          cpf: formattedCpf,
          name: name,
          email: email,
          password: hashPassword,
          phone_number: formattedTelephone,
          birthday_date: birthdayDate,
          user_type_id: 1,
          push_notification_token: pushNotificationToken || null
        }
      })

      const id = createdUser.id

      await prisma.subscription.create({
        data: {
          user_id: id,
          plan_id: 1,
          payment_method_id: 1,
          final_price: 0,
          auto_renew: false
        }
      })

      await prisma.points.create({
        data: {
          user_id: id,
          value: 0,
          points_type_id: 1
        }
      })

      await prisma.balance.create({
        data: {
          user_id: id,
          value: 0,
          balance_type_id: 1
        }
      })

      const accessToken = jwt.sign({ id }, authAccessToken.secret, {
        expiresIn: accessTokenLife.tokenLife
      })

      const refreshToken = jwt.sign({ id }, authRefreshToken.secret, {
        expiresIn: refreshTokenLife.refreshTokenLife
      })

      await prisma.user.update({
        where: {
          id: id
        },
        data: {
          last_login_at: new Date()
        }
      })

      return response.status(201).json({
        accessToken: accessToken,
        refreshToken: refreshToken
      })
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}

export { CreateUserController }
