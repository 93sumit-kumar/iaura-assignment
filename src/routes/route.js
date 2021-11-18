const express = require('express');
const route = express();
const userController = require('../controllers/userController');

// route for signup
route.post('/signup', userController.signup);

// route for logged in
route.post('/login', userController.login);

// route for get single user
route.get(
   '/user/:userId',
   userController.allowIfLoggedin,
   userController.getUser
);

// route for all users
route.get(
   '/users',
   userController.allowIfLoggedin,
   userController.grantAccess('readAny', 'Admin'),
   userController.getUsers
);

// route for update single user
route.put(
   '/user/:userId',
   userController.allowIfLoggedin,
   userController.grantAccess('updateAny', 'Admin'),
   userController.updateUser
);

// route for delete single user
route.delete(
   '/user/:userId',
   userController.allowIfLoggedin,
   userController.grantAccess('deleteAny', 'Admin'),
   userController.deleteUser
);

// export the module
module.exports = route;
