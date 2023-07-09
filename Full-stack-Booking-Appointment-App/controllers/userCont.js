const User = require('../models/User');

exports.getUsers =  async (req,res, next)=>{
    try{
        const users = await User.findAll();
        res.status(200).json({allUsers : users}); 
    }catch(err){
        console.log('Get user is failing',JSON.stringify(error));
        res.status(500).json({error:err});
    } 
};


exports.addUser = async (req,res, next)=>{
    try{
        if(!req.body.phoneno || !req.body.name || !req.body.email){
            throw new Error('All fields are mandatory')
        }
        const name = req.body.name;
        const email = req.body.email;
        const phoneno = req.body.phoneno;

        const data = await User.create({
            name:name,
            email:email,
            phoneno:phoneno
        })
        res.status(201).json({newUserDetails : data}); 
    }
    catch(err){
        res.status(500).json({error:err})
    }
};


exports.deleteUser =  async (req,res, next)=>{
    try{
        if(req.params.id=="undefined"){ //comes as a string from req
            console.log("id is missing");
            return res.status(400).json({err : "ID is missing"});
        }
        const uId  = req.params.id;
        await User.destroy({where: {id: uId}})
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};


// app.post('/add-user', async (req,res, next)=>{
//     try{
//     const name = req.body.name;
//     const email = req.body.email;
//     const phoneno = req.body.phoneno;

//     const data = await User.create({
//         name:name,
//         email:email,
//         phoneno:phoneno
//     })
//     res.status(201).json({newUserDetails : data}); }
//     catch(err){
//         console.log(err);
//     }
// })

// app.get('/get-user', async (req,res, next)=>{
//     const users = await User.findAll();
//     res.status(200).json({allUsers : users}); 
// });

// app.delete('/delete-user/:id', async (req,res, next)=>{
//     try{
//         if(req.params.id=="undefined"){ //comes as a string from req
//             console.log("id is missing");
//             return res.status(400).json({err : "ID is missing"});
//         }
//         const uId  = req.params.id;
//         await User.destroy({where: {id: uId}})
//         res.sendStatus(200);
//     }catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// })