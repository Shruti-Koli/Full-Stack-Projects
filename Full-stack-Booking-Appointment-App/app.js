const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const regRoutes = require('./routes/regpage');

const app = express();

app.use(cors());

app.use(bodyParser.json({extended : false}));

app.use('/user',regRoutes);

sequelize.sync()
.then( res =>{
    //console.log(res);
    app.listen(3000);
   
})
.catch(err=>console.log(err));