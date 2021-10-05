import supertest from 'supertest'
import app from '../../app'
import { prisma } from '../../services'

const pathOwner = '/owner'

const areaTest = {
  id: 55,
  description: 'TesteArea'
}

beforeAll(async () => {
  await prisma.area.create({ data: areaTest })
}, 30000)
afterAll(async () => {
  await prisma.owner.delete({ where: { id: '1228' } })
  await prisma.area.delete({ where: { id: 55 } })
}, 30000)

describe('POST /owner', () => {
  it('deve retornar status code 201, todos os campos com os dados corretos', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        id: '1228',
        name: 'Owner teste',
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(201)
  })

  it('Deve retornar status code 400, campo name não preenchido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code 400, campo neighborhood inválido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 'Owner teste',
        neighborhood: 7,
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code 400, campo neighborhood não preenchido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 'Owner teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code 400, campo street inválido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 32131,
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code 400, campo street não preenchido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code 400, campo latitude inválido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: '-2312321321',
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code 400, campo latitude não preenchido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        long: -123151232,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code, campo longitude inválido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: '-123151232',
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code, campo longitude não preenchido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        complement: 'Teste',
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code, campo complemento inválido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        complement: 11,
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code, campo complemento não preenchido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        areaId: 55,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code, campo area inválido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        areaId: 42,
        dog: []
      })
      .expect(400)
  })
  it('Deve retornar status code, campo area não preenchido', async () => {
    return supertest(app)
      .post(pathOwner)
      .send({
        name: 23,
        neighborhood: 'Bairro teste',
        street: 'Rua teste',
        lat: -2312321321,
        long: -123151232,
        complement: 'Teste',
        dog: []
      })
      .expect(400)
  })
})
