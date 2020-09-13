const express = require('express');
const app = express();
// routes
const { getPosts } = require('./routes/post');

app.get('/', getPosts);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
