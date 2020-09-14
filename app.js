const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// routes
const postRoutes = require('./routes/post');

dotenv.config();

// db connection
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
).then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`);
});

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', postRoutes);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
