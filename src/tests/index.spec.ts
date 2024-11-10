import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint response', () => {
  it('Gets the api/images endpoint &  test resizing', async () => {
    const response = await request.get('/api/images?filename=fjord&width=900&height=900')
    expect(response.status).toBe(200)
  })
})

describe('Test resizing with missing name or parameters', () => {
  it('test resizing with missing filename', async () => {
    const response = await request.get('/api/images?width=900&height=900')
    expect(response.status).toBe(400)
  })
  it('test resizing with missing width', async () => {
    const response = await request.get('/api/images?filename=fjord&height=900')
    expect(response.status).toBe(400)
  })
  it('test resizing with missing height', async () => {
    const response = await request.get('/api/images?filename=fjord&width=900')
    expect(response.status).toBe(400)
  })
})

describe('Test resizing with not exist image name', () => {
  it('test resizing with incorrect filename', async () => {
    const response = await request.get(
      '/api/images?filename=incorrect&width=900&height=900'
    )
    expect(response.status).toBe(404)
  })
})
