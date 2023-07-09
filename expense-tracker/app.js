const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use('/user',userRoutes);


sequelize.sync()
.then((res)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})
