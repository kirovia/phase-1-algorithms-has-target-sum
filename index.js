/* 
  
PROBLEM
I need to write a function that will take two arguments. The first argument will be an array of numbers and the second argument will be a single number. This function is going to check to see if any two numbers in the array can be summed to equal the second argument, returning true if so and false if not
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

PSEUDOCODE
function iterates over the array of numbers
for each item in array, iterate over numbers again
add the index of the first iteration with the index of the second iteration
return does index1 + index2 === second argument?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

function hasTargetSum(array, target) {
  for (let i1 = 0; i1 < array.length; i1++) {
    for (let i2 = 0; i2 < array.length; i2++) {
      if (array[i1] + array[i2] === target && array.indexOf(array[i1], i1) !== array.indexOf(array[i2], i2)) {
        return true;
      }
    }
  }
  return false
}

/*

CODE EXPLANATION
The code is maybe not optimal, in fact I think it is O(n²), but it runs as expected. The function runs two for loops, first checking to see if two numbers match each other, but we cannot match a number with itself to sum the target number. That is why I incorporated that the numbers have to sum the target AND not be located at the same index (cannot be the same number duplicated and added to itself)

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
