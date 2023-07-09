const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

const sequelize = require('./util/database');

const User = require('./models/User');
app.use(cors());

const regRoutes = require('./routes/regpage');

app.use(bodyParser.json({extended : false}));

app.use('/user',regRoutes);


sequelize.sync()
.then( res =>{
    //console.log(res);
    app.listen(3000);
   
})
.catch(err=>console.log(err));