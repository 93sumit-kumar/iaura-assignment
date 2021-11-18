const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./models/userModels');
const routes = require('./routes/route');

require('dotenv').config({
   path: path.join(__dirname, '../.env')
});

const app = express();

// Create server port
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/iaura').then(() => {
   console.log('Database connected!');
});

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create middleware route
app.use(async (req, res, next) => {
   if (req.headers['x-access-token']) {
      const accessToken = req.headers['x-access-token'];
      const { userId, exp } = await jwt.verify(
         accessToken,
         process.env.JWT_SECRET
      );

      // checking if token expired
      if (exp < Date.now().valueOf() / 1000) {
         res.send({
            statusCode: 401,
            message: 'JWT Token has been expired'
         });
      }
      res.locals.loggedInUser = await User.findById(userId);
      next();
   } else {
      next();
   }
});

// create Express Server
app.use('/', routes);
app.listen(PORT, () => {
   console.log('Server started at ', PORT);
});
