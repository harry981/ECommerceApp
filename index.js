/*jslint node: true */
const express = require('express')
const mongoose=require('mongoose')
const app = express();
const db=mongoose.connect('mongodb://localhost/bookAPI')




app.use('/',require('./router/index'))
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log('Running on Port : ' + PORT)
})