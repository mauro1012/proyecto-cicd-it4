const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('Debería responder con un estado 200 y un JSON de éxito', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe("success");
    });
});