const lodash  = require("lodash");
const { localeData } = require("moment");

// externilise the module 
const details = [
    {id:1,name:'sunil',company:'patheya'},
    {id:2,name:'tany',company:'patheya'},
    {id:3,name:'sunil',company:'tcs'},
    {id:4,name:'kumar',company:'patheya'},
    {id:5,name:'sunil',company:'wipro'},
  ]

  const groupUsers = (property)=>{ // created one function and exported that function from here
    const f1 = lodash.groupBy(details,property)   //  
      return f1;     
}
// this is first method to exporting the thing we have one more method 
//   module.exports = details;
//   module.exports = groupUsers; 

  // second method is 
  module.exports ={details,groupUsers}