const express = require('express');

const userController = require('../controllers/userCont');

const routes = express.Router();


routes.get('/get-user',userController.getUsers);
routes.post('/add-user',userController.addUser);
routes.delete('/delete-user/:id',userController.deleteUser);


module.exports = routes;
