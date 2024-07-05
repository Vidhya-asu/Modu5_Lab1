//Vidhyalakshmi PE
//Student ID: 1216804810 
//Date: 7/5/2024

// Required for Node to read .env file
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const myMiddleware = require('./custom-middlewares/loggerMiddleware'); // Assuming the path is correct
const express = require('express');
const app = express(); // Create an Express app


// required for communicating and connecting to the database
// and perform CRUD operations
const mongoose = require('mongoose');

// required for the application to run
//const app = require('./server');

app.use(myMiddleware); // Application-level middleware

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
  console.log(`To test the IFT 458 REST App Click Or Type: http://localhost:${port}...`);
});

