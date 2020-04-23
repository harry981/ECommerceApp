const express=require('express')
const bodyParser=require('body-parser')
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

    router.post('/books',(req,res)=>{
              var book=new Book(req.body)
             book.save();
              console.log("added book",book)
              return res.status(201).json({addedBook:book})
    })

module.exports=router;