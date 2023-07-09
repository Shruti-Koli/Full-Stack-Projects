//http://localhost:3000/user/get-expenses
//http://localhost:3000/user/add-expense
//user/delete-expense/


const express = require('express');
const userController = require('../controllers/userExpenses');

const routes = express.Router();

routes.get('/get-expenses',userController.getExpenses);

routes.post('/add-expense',userController.addExpense);

routes.delete('/delete-expense/:id',userController.deleteExpense);

module.exports = routes;
