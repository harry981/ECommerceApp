/*jslint node: true */
const express = require('express')

const app = express();

app.use('/',require('./router/index'))
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log('Running on Port : ' + PORT)
})