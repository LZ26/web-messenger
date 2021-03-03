const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

const { db } = require('./db/index');

//middleware for handling static files in public directory
app.use(express.static(path.join(__dirname, 'public')));

//middleware for parsin HTML & JSON formatted data to server-side
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//logging middleware
app.use(morgan('dev'));

//routes
app.use('/test', require('./routes/testRoute'));

//404-error handling middleware
app.use((req, res, next) => {
  const error = new Error('Oops, the page was not found...', error.stack);
  error.status = 404;
  next(error);
});

//500-error handling middleware
app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send(`There was a problem processing your request`, err.message);
});

//sets up PORT for app and initiates a server
const PORT = 3000;
const init = async () => {
  try {
    await db.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`App is running on PORT: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

init();
