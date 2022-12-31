var express = require('express');
var router = express.Router();
var lodash = require('lodash');
var moment = require('moment')
moment().format()

const details = [
  {id:1,name:'sunil',company:'patheya'},
  {id:2,name:'tany',company:'patheya'},
  {id:3,name:'sunil',company:'tcs'},
  {id:4,name:'kumar',company:'patheya'},
  {id:5,name:'sunil',company:'wipro'},
]


router.get('/get',(req,res,next)=>{
  res.send('welcome to the express.js API')   // get method
  // only one [res.send] we can send we cant reapet it
})

router.get('/get/keys',(req,res,next)=>{
  res.send(Object.keys(details[0]))        // we can get keys also here  by using  [object.keys()]
})

router.get('/valuess',(req,res,next)=>{
  res.send(Object.values (details[0]))        // we can get values also here  by using  [object.values()]
})



router.get('/get/:id',(req,res,next)=>{  // with one parameter
  res.send('my name is -' + req.params.id)
})

router.get('/get/:id/:name',(req,res,next)=>{   // for multiple parameters
  res.send(req.params)
})

router.get('/jason',(req,res,next)=>{
  res.json({name:'sunil',age:'12'})
})

router.get('/get/lodash',(req,res,next)=>{   // returning aray here
  res.send(details)
})

router.get('/aray/lodash/groupBy',(req,res,next)=>{    // lodash property used here
  const f1 = lodash.groupBy(details,'name')
  res.send(f1)
})

router.get('/aray/lodash/groupBy/:propertyName',(req,res,next)=>{   // grouped by giving property name
  const f2 = lodash.groupBy(details,req.params.propertyName)
  res.send(f2)
})

router.get('/moment',(req,res,next)=>{  // we are  using moment npm pcakge here here
  const f3 = moment().dayOfYear(12)
  res.send(f3)
})

// other methods
router.post('/post',(req,res,next)=>{  // post method to add the data
  if(!req.body.name || req.body.name.length < 3){   // added one conditione here for name
    res.status(404).send('name is required and it should be more than 3 characterss')
  }

  const f4 ={
    id:details.length + 1,
    name: req.body.name

  }
  details.push(f4)   
  res.send(details)     // here we add  new (post) data in our aray (details)
})

router.post('/postMethod',(req,res,next)=>{    // normal post method to post the data 
  const input = req.body
  console.log('input passed as ', input)
  res.send(input)
})
  
// use of spread operator in post method
router.post('/postMethod/spread',(req,res,next)=>{    
  const input = req.body

   let cloneInput = {...input}    // ... is nothing but spread operator
   cloneInput.createdAt = new Date()
    // we have clone another object inside our input
  // i.e createdAt and it gives us time and added in our data                                        
   console.log('output  passed as ', input)
  res.send(cloneInput)
})

// in spread operator we can use moment() npm package for getting difrrent dates
router.post('/postMethod/moment',(req,res,next)=>{
  const inputBody = req.body
  let cloneNewItem = {...inputBody}
  cloneNewItem.dayOfYear = moment().dayOfYear(300)
  res.send(cloneNewItem)
})

// error handeling 

try {                                                     // we try our code 
router.post('/postMethod/spread',(req,res,next)=>{    
  const input = req.body
  
   let cloneInput = {...input}    // ... is nothing but spread operator
   cloneInput.createdAt = new Date()
    // we have clone another object inside our input
  // i.e createdAt and it gives us time and added in our data                                        
   console.log('output  passed as ', input)
   throw   "error here " ;                          // we throw error to excetute catch
  res.send(cloneInput)
})}
catch (error) {        // when any errors occurse it is in action gives us error msg
  console.error(error);
  res.status(404).send('failed!!!!')
}


router.delete('/delet/:id',(req,res,next)=>{          // BY using Id we delet that id and all deatils in an aray
  const f5 = details.find(c=> c.id === parseInt(req.params.id))
  if(!f5) res.status(404).send('Enter the valid ID')

  const index = details.indexOf(f5)
  details.splice(index,1)
  res.send(details)
})


router.put('/put/:id',(req,res,next)=>{      // put method - for updating the data
   let id = req.params.id                    // its not working
   let name = req.body.name

     const index =details.indexOf((student=>{
      return student.id === Number.parseInt(id)
    }))

  if(index>0){
    let std =details[index]
    std.name = name
    res.json(std)
  }else{
    res.status(404)
  }
})
router.get('/get/')
module.exports = router;
