const express=require('express')

const router=express.Router();

router.use('/book',require('./bookRoutes'))
router.use('/author',require('./authorRoutes'))

module.exports=router;