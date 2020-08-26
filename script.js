/* function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0
  });
} */

// Refactor to rest operator and arrow function
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);
console.log(filterOutOdds(1,2,3,4,5,6)); // [2,4,6]

// rest and spread to findMin
const findMin = (...numbers) => Math.min(...numbers)
console.log(findMin(1, 4, 12, -3)); // -3

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a:1, b:2, c:3, d:4}

// doubleAndReturnArts
/* Write a function called doubleAndReturnArgs which accepts 
an array and a variable number of arguments. The function 
should return a new array with the original array values and
all of additional arguments doubled.*/
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]

// Slice and Dice
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
  let random = Math.floor(Math.random() * items.length);
  return [...items.slice(0, random), ...items.slice(random + 1)];
}
console.log(removeRandom([1,2,3,4,5,6]));

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
  let newObj = {...obj}
  newObj[key] = val;
  return newObj;
}
console.log(addKeyVal({ 'first': 'laura', 'last': 'dern' }, 'middle', 'linney'))

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  let newObj2 = {...obj};
  delete newObj2[key];
  return newObj2;
}
console.log(removeKey({'first': 'jake', 'last': 'gylenhall'}, 'last'));

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
  let newObj3 = { ...obj }
  newObj3[key] = val;
  return newObj3;
}
console.log(update({'first': 'laura', 'last': 'dern'}, 'last', 'linney'))