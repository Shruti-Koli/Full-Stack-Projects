const Expense = require('../models/Expens');

exports.getExpenses=async (req, res, next)=>{
    try{
        const expenseList = await Expense.findAll();
        res.status(200).json({expenseList: expenseList})
    }catch(err){
        console.log(JSON.stringify(err));
        res.status(500).json({err:err})
    }
};


exports.deleteExpense = async(req,res,next)=>{
    try{
        if(req.params.id=="undefined"){ //comes as a string from req
            console.log("id is missing");
            return res.status(400).json({err : "ID is missing"});
        }
        const uId  = req.params.id;
        await Expense.destroy({where: {id:uId}});
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.addExpense =async (req, res, next)=>{
    try{
        if(!req.body.price || !req.body.descr || !req.body.category){
            throw new Error('All fields are mandatory')
        }
        const price = req.body.price;
        const descr = req.body.descr;
        const category = req.body.category;
        console.log(price, descr , category)
        const data = await Expense.create({
            price:price,
            descr:descr,
            category:category
        })
        res.status(201).json({newExpense: data});
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err})
    }
};
