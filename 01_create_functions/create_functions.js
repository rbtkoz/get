// # Create Functions
//
// Create a function, which returns an array of functions. Each function returns their index in the array.  Here is an example:
//
// ```
// var arrayOfFunctions = createFunctions(5); // create an array, containing 5 functions
//
// arrayOfFunctions[0](); // must return 0
// arrayOfFunctions[3](); // must return 3
// arrayOfFunctions[arrayOfFunctions.length - 1 ](); // must return 4
// ```


function createFunctions(num){
  var counter = 0;
  var funcArr = [];

  var func = function(){

   counter ++;

  };

  for(var i = 0; i < num; i++){
    funcArr.push(func);

  }

  return funcArr;

}
