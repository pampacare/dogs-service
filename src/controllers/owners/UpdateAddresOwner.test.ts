import supertest from 'supertest'
import app from '../../app'
import { prisma } from '../../services'

const ownerData = {
  id: '123',
  name: 'Jhin',
  neighborhood: 'Bairro A',
  street: 'Rua ABC 11',
  lat: -29.76806944444444,
  long: -57.11188333333333,
  complement: 'Lote A2',
  area_id: 200
}

const areaTest = {
  id: 200,
  description: 'Teste'
}

beforeAll(async () => {
  await prisma.area.create({ data: areaTest })
  await prisma.owner.create({ data: ownerData })
})

afterAll(async () => {
  await prisma.owner.delete({ where: { id: '123' } })
  await prisma.area.delete({ where: { id: 200 } })
})

describe('PUT /owner/:id', () => {
  it('should return 200 if all required fields are supplied', async () => {
    return supertest(app)
      .put(`/owner/${ownerData.id}`)
      .send({
        lat: -29.76806944444444,
        long: -53.14466111111352,
        street: 'Rua F 11',
        areaId: 200,
        neighborhood: 'Cabo Luis Quevedo',
        complement: 'Lote A2'
      })
      .expect(201)
  })

  it('should return 400 if some required field are not supplied', async () => {
    return supertest(app)
      .put(`/owner/${ownerData.id}`)
      .send({
        lat: -29.76806944444444,
        long: -57.11188333333333,
        street: 'Albertino Pires, Travessa Marques Acuahs, 170'
      })
      .expect(400)
  })
})
