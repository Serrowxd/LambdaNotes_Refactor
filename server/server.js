// Node
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Local Routes

mongoose.connect('mongodb://localhost:27017/lambda-notes');

// Server
const server = express();

// Logger

function logger(req, res, next) {
  console.log('body: ', req.body);

  next();
}

// Middleware
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

// Imports

const Note = require('./data/noteSchema.js');

// Server

server.get('/', function(req, res) {
  Note.find()
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      res.status(500).json({ error: 'Note does not exist' });
    });
});

server.post('/post', (req, res) => {
  const note = new Note(req.body);

  note
    .save()
    .then(savedNote => {
      res.send('Note Saved');
    })
    .catch(err => {
      res.status(400).send('Unable to save Note');
    });
});

server.put('/:id', (req, res) => {});

server.delete('/:id', (req, res) => {});

const port = 5000;
server.listen(port, () =>
  console.log(`d-(OvO")z up and running on port ${port}`)
);

module.exports = server;
