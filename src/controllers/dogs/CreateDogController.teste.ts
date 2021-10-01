
import supertest from 'supertest'
import { isRegExp } from 'util/types'
import app from '../../app'
import { prisma } from '../../services'

const pathDogs = '/dogs'

const breedTest = {
    "id": 1227,
    "name": "Teste"
}
const sexTestFem = {
    "id": 1227,
    "description": "Fêmea"
}
const sexTestMal = {
    "id": 1228,
    "description": "Macho"
}
const areaTest = {
    "id": 1227,
    "description": "Teste"
}
const ownerTest = {
    "id": "1227",
    "name": "Owner teste",
    "neighborhood": "Bairro teste",
    "street": "Rua teste",
    "lat": -2312321321,
    "long": -123151232,
    "complement": "Teste",
    "area_id": 1227
}


beforeAll(async () => {
    await prisma.breed.create({ data: breedTest });
    await prisma.sex.create({ data: sexTestFem });
    await prisma.sex.create({ data: sexTestMal });
    var area = await prisma.area.create({ data: areaTest });
    await prisma.owner.create({ data: ownerTest });
})
afterAll(async () => {
    await prisma.breed.delete({ where: { id: 1227 } });
    await prisma.sex.delete({ where: { id: 1227 } });
    await prisma.sex.delete({ where: { id: 1228 } });
    var area = await prisma.area.delete({ where: { id: 1227 } });
    await prisma.owner.delete({ where: { id: '1227' } });
})

describe('POST /dogs', () => {
    it("deve retornar status code 201, todos os campos com os dados corretos", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "12/12/2020",
                    "wearCollar": true,
                    "sexId": 1227,
                    "ownerId": 1227,
                    "breedId": 1227
                }
            )
            .expect(201)
    })
    it("Deve retornar status code 400, campo bornYear inválido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/13/2020",
                    "wearCollar": true,
                    "sexId": 1227,
                    "ownerId": 1227,
                    "breedId": 1227
                }
            )
            .expect(400)
    })
    it("Deve retornar status code 400, campo bornYear não preenchido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "wearCollar": true,
                    "sexId": 1227,
                    "ownerId": 1227,
                    "breedId": 1227
                }
            )
            .expect(400)
    })
    it("Deve retornar status code 400, campo wearCollar inválido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "wearCollar": 22,
                    "sexId": 1227,
                    "ownerId": 1227,
                    "breedId": 1227
                }
            )
    })
    it("Deve retornar status code 400, campo wearCollar não preenchido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "sexId": 1227,
                    "ownerId": 1227,
                    "breedId": 1227
                }
            )
    })
    it("Deve retornar status code 400, campo sexId inválido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "wearCollar": 22,
                    "sexId": 123213,
                    "ownerId": 1227,
                    "breedId": 1227
                }
            )
            .expect(400)
    })
    it("Deve retornar status code 400, campo sexId não preenchido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "wearCollar": 22,
                    "ownerId": 1227,
                    "breedId": 1227
                }
            )
            .expect(400)
    })
    it("Deve retornar status code 400, campo ownerId inválido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "wearCollar": 22,
                    "sexId": 1227,
                    "ownerId": 192929,
                    "breedId": 1227
                }
            )
            .expect(400)
    })
    it("Deve retornar status code 400, campo ownerId não preenchido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "wearCollar": 22,
                    "sexId": 1227,
                    "breedId": 1227
                }
            )
            .expect(400)
    })
    it("Deve retornar status code, campo breedId inválido", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "wearCollar": 22,
                    "sexId": 1227,
                    "ownerId": 1227,
                    "breedId": 122731232
                }
            )
            .expect(400)
    })
    it("Deve retornar status code, campo breedId não preenchido                                                ", async () => {
        return supertest(app)
            .post(pathDogs)
            .send(
                {
                    "name": "Pitoco",
                    "bornYear": "30/12/2020",
                    "wearCollar": 22,
                    "sexId": 1227,
                    "ownerId": 1227,
                }
            )
            .expect(400)
    })

})


