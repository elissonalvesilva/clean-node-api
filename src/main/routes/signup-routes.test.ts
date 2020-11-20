import request from 'supertest'

import app from '../config/app'

describe('SignUp Route ', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Elisson',
        email: 'elisson.silva@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
