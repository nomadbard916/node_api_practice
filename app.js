const express = require('express');
const app = express();
const morgan = require('morgan');

// routes
const { getPosts } = require('./routes/post');

// middleware
app.use(morgan('dev'));

app.get('/', getPosts);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
