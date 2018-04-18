const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../server');

// Sample test
describe('hello to the world', () => {
  it('/hello works', async () => {
    const res = await supertest(app)
      .get('/hello')
      .expect(200);
    expect(res.text).to.equal('hello world');
});