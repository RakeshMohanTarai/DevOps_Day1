// Import the required modules
const request = require('supertest'); // Fix the require statement
const app = require('./app'); // Import your express app without starting the server

describe('GET /', () => {
  it('should return Jenkins_Day1_Pipeline', async () => {
    const res = await request(app).get('/'); // Await the request
    expect(res.statusCode).toBe(200); // Check for status code 200
    expect(res.text).toBe('Jenkins_Day1_Pipeline'); // Check for the response text
  });
});
