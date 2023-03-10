require('dotenv').config();
const express = require('express');
const db = require('./db/connect.js');
const cors = require('cors');

const todoRoutes = require('./routes/todo.js');

const port = process.env.PORT || 4000;
const app = express();

// Boilerplat express setup to ensure that when a request comes in, the body of the request is
// converted to JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// This is a reference to the route handlers that I created in a different file - only made the separation to keep this file slim.
app.use(todoRoutes);

// This is called an immediately invoked function expression. Basically it's a regular JS function that calls itself right away. A neat little trick.
// Here we set up the connection to the database and then have the server listen on a port so that route requests are sent to the right place.
(async () => {
  await db.init();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
