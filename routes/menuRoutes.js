const express=require('express')
const router=express.Router();
const menu=require('../models/menuModel')
router.get('/getallmenu' ,async(req,res)=>{
    try{
        const m=await menu.find({})
        res.send(m)
    }
    catch(err)
    {
        console.log(err)
    }
})
module.exports=router;