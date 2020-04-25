const express = require('express')
const bodyParser = require('body-parser')
const Book = require('../../../models/bookModel')
const router = express.Router();

router.get('/books', (req, res) => {
    const { query } = req;
    Book.find(query, (err, books) => {
        if (err) {
            const errResp = { errorResponse: err }
            return res.json(errResp)
        }
        return res.json({ Booklist: books })

    })
})

router.get('/books/:bookId', (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        if (err) {
            const errResp = { errorResponse: err }
            return res.json(errResp)
        }
        return res.json({ bookById: book })
    })
})

router.post('/books', (req, res) => {
    var book = new Book(req.body)
    book.save();
    console.log("added book", book)
    return res.status(201).json({ addedBook: book })
})

router.put('/books/:bookId', (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        if (err) {
            return res.json({ errorResponse: err })
        }
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.title = req.body.title;
        book.read = req.body.read;
        book.save();
        return res.json({ bookEdited: book })
    })
})

router.patch('/books/:bookId', (req, res) => {
   if(req.body._id){
       delete req.body._id;
   }
    Book.findById(req.params.bookId, (err, book) => {
        if (err) {
            return res.json({ errorResponse: err })
        }
        const value = Object.entries(req.body);
        console.log('Object Entries ', value)
        value.forEach((item) => {
            var key = item[0]
            var value = item[1]
            book[key] = value
        })
        book.save();
        return res.json({ patchedBook: book })

    })
})

router.delete('/delete/:bookId',(req,res)=>{
        Book.deleteOne({_id:req.params._id},(err)=>{
           if(err){
               return res.json({ errorResponse: err })
           }
           return res.status(204).json({deleteStatus:'Success'})
        })
})

module.exports = router;