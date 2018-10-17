const mongoose = require('mongoose');
const server = require('./server/server');
const port = 5500;

mongoose.connect(
  // 'mongodb://localhost/notes',
  'mongodb://admin:adminpass1@ds125953.mlab.com:25953/noted',
  {},
  err => {
    if (err) return console.log(err);
    console.log('Connected to MongoDB');
  }
);

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`Server running on ${port}`);
});
