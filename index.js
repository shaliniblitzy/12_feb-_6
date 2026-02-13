// Express.js server entry point
// Defines two HTTP GET endpoints and exports the app instance for testing

const express = require('express');

// Create the Express application instance
const app = express();

// GET / — returns plain-text "Hello world" with HTTP 200
app.get('/', (req, res) => {
  res.send('Hello world');
});

// GET /evening — returns plain-text "Good evening" with HTTP 200
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Conditionally start the HTTP listener
// Skipped when NODE_ENV is 'test' to allow Supertest-based testing without port conflicts
if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Export the Express app instance for Supertest-based testing
module.exports = app;
