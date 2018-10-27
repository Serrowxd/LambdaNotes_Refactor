// Node
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Local Routes

mongoose.connect('mongodb://localhost/notes');
// mongoose.connect('mongodb://admin:adminpass1@ds125953.mlab.com:25953/noted');

// Server
const server = express();
const port = 5000;

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

const router = express.Router();

server.get('/get', function(req, res) {
  Note.find()
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      res.status(500).json({ error: 'Note does not exist' });
    });
});

server.get('/:id', function(req, res) {
  const { id } = req.params;
  Note.findById(id)
    .then(note => {
      if (note === null) {
        return res.status(404).json({ error: 'This note does not exist!' });
      }
      res.status(200).json(note);
    })
    .catch(error => {
      res.status(500).json(error);
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

server.listen(port, () =>
  console.log(`d-(OvO")z up and running on port ${port}`)
);

module.exports = server;
