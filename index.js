/*jslint node: true */
const express = require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

if(process.env.ENV==='Test'){
   console.log('This is a Test')
  const db=mongoose.connect('mongodb://localhost/bookAPI_Test')
}
else{
  console.log('This is a not a Test')
  const db=mongoose.connect('mongodb://localhost/bookAPI')
}



app.use('/',require('./router/index'))
const PORT = process.env.PORT || 3000;


app.server=app.listen(PORT, () => {
  console.log('Running on Port : ' + PORT)
})

module.exports=app;