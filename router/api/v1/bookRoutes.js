const express=require('express')
const Book=require('../../../models/bookModel')
const router=express.Router();

router.get('/books',(req,res)=>{
const {query}=req;
   Book.find(query,(err,books)=>{
       if(err){
           const errResp={errorResponse:err}
          return res.json(errResp)
       }
       return res.json({Booklist:books})

   })
})

router.get('/books/:bookId',(req,res)=>{
    Book.findById(req.params.bookId,(err,book)=>{
       if(err){
        const errResp={errorResponse:err}
        return res.json(errResp)
       }
       return res.json({bookById:book})
    })
    })

module.exports=router;