const express = require('express');

const server = express();

const adoptersRouter = require('./adopters/adopers-router')
const dogsRouter = require('./dogs/dogs-router')

server.use(express.json()); //before endpoints

server.use('/api/adopters', adoptersRouter) //must be after json() or can't read
server.use('/api/dogs', dogsRouter) //inject start path | use this router

server.use('*', (req, res) => { //catches anything, must be at end
  res.status(404).send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
    <p>Oooops, we cannot find that resource</p>
  `);
});

module.exports = server;

// ctrl + p -> find routers