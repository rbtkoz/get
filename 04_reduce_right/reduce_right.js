
//
//
// # Reduce Right
//
// ## Description
//
// Create a function called reduceRight that accepts an array, a starting value and an iterating function.  Instead of iterating over the array from left to right, have the reduceRight function start from the last element in the array.
//
// ** Implement the reduceRightRecursive function for Extra Credit **


function reduceRight(arr){
  var revArr = [];
  for(var i = arr.length;i>=0;i--){
  revArr.push(arr[i]);
}
return revArr.join('');
}


function reduceRightRecursive(arr, prev, func){
  var revArr = [];
  if(arr.length === 0){
    return revArr;
  }
  return reduceRightRecursive(arr,arr.length-1,func);
}


// function factorial(n){
// 	if( n === 0){
// 		return 1;
// 	}
// 	return n * factorial(n-1);
// }
