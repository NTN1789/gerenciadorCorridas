const request = require('supertest');
const app = require('./app');

describe('Teste de API Corridas', () => {
    it('Deve criar uma nova corrida', async () => {
        const res = await request(app)
            .post('/corridas')
            .send({ usuario: 'João' });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.usuario).toBe('João');
        expect(res.body.status).toBe('ativa');
    });

    it('Deve cancelar uma corrida existente', async () => {
        const res = await request(app)
            .put('/corridas/1/cancelar');

        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe('cancelada');
    });

    it('Deve listar corridas', async () => {
        const res = await request(app)
            .get('/corridas');

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});