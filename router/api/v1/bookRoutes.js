const express=require('express')

const router=express.Router();

router.get('/books',(req,res)=>{
   const response={hello:'All Books from API'}
   res.json(response);
})

module.exports=router;