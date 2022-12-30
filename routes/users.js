var express = require('express');
var router = express.Router();
var lodash = require('lodash');
const details  = require('./controllers/users.controllers');
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get/lodash',(req,res,next)=>{   // returning aray here
  res.send(details)
})

router.get('/aray/lodash/groupBy',(req,res,next)=>{    // lodash property used here
  const f1 = lodash.groupBy(details,'name')
  res.send(f1)            // groupusers is a function name (name is property)
})

router.get('/aray/lodash/groupBy/:propertyName',(req,res,next)=>{   // grouped by giving property name
  const f1= groupUsers(req.params.propertyName)   // groupusers is a function  and we grouped by giving propertyNAame
  res.send(f1) 
  
})

module.exports = router;
