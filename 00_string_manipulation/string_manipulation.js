// Create a JavaScript function called vowelsCount(str). The str aka string parameter being passed should return the number of vowels the string contains. Do not count y as a vowel for this challenge.
//
// For Example:
//
//
// ```
// // INPUT: 'David Yang'
// vowelsCount('David Yang');
// // OUTPUT: 3;
// ```
//
// ```
// // INPUT: 'Nimit Maru'
// vowelsCount('Nimit Maru');
// // OUTPUT: 4;
// ```

var vowelsCount = function(str){
  var str = str.toUpperCase();
  var str = str.split('')

  var vowelArr = "aeiou".toUpperCase().split('');

  var counter = 0;
  if(str.length === 0){
    //console.log("in zero");
    return 0;
  }else{

    for(var i =0; i< str.length; i++){
      for(var j = 0; j < vowelArr.length; j ++){
        if(str[i] === vowelArr[j]){
          console.log("Im here");
          counter ++;
        }
      }
    }
    return counter;
  }
}
