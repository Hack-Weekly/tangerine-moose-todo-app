// This file just abstracts away some of the boilerplate database configuration that needs to be done.
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

// Create a mongodb client so that we can communicate with it.
const client = new MongoClient(process.env.MONGODB_URL);

// Create a function to initialize the client.
const init = async () => {
  try {
    await client.connect();
    console.log('Connected to db');
  } catch (error) {
    console.log(error);
  }
};

// Create a utility function to make the client accessible to the outside world.
const getClient = () => {
  return client;
};

module.exports.init = init;
module.exports.getClient = getClient;
