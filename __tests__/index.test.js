// Integration tests for the Express.js server endpoints
// Uses Jest as the test runner and Supertest for HTTP assertion testing

const request = require('supertest');
const app = require('../index');

describe('Express Server Endpoints', () => {
  // Tests for the root endpoint GET /
  describe('GET /', () => {
    it('should return 200 status code', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
    });

    it('should return "Hello world" as the response body', async () => {
      const res = await request(app).get('/');
      expect(res.text).toBe('Hello world');
    });
  });

  // Tests for the evening endpoint GET /evening
  describe('GET /evening', () => {
    it('should return 200 status code', async () => {
      const res = await request(app).get('/evening');
      expect(res.statusCode).toBe(200);
    });

    it('should return "Good evening" as the response body', async () => {
      const res = await request(app).get('/evening');
      expect(res.text).toBe('Good evening');
    });
  });

  // Test for non-existent route returning 404
  describe('GET /undefined-route', () => {
    it('should return 404 for non-existent routes', async () => {
      const res = await request(app).get('/undefined-route');
      expect(res.statusCode).toBe(404);
    });
  });

  // Test that POST method on root endpoint returns 404
  describe('POST /', () => {
    it('should return 404 for POST on root endpoint', async () => {
      const res = await request(app).post('/');
      expect(res.statusCode).toBe(404);
    });
  });

  // Test that POST method on /evening endpoint returns 404
  describe('POST /evening', () => {
    it('should return 404 for POST on /evening endpoint', async () => {
      const res = await request(app).post('/evening');
      expect(res.statusCode).toBe(404);
    });
  });
});
