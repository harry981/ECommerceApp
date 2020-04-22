const express=require('express')

const router=express.Router();

router.get('/',(req,res)=>{
  const resp={hello:'Hello from the Outside'}
    res.json(resp)
})
router.use('/api',require('./api/v1/index'))

module.exports=router;