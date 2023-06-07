// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const hitchhikersCharacters = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// describe("peopleList", () => {
//     it("creates a function that takes an array of objects and returns an array with a sentence about each person with their name capitilized", () => {
//     expect(peopleList(hitchhikersCharacters)).toEqual("Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.")
//  })
// })

//Red test- Good Failure
// FAIL  ./code-challenges.test.js
// peopleList
//   ✕ creates a function that takes an array of objects and returns an array with a sentence about each person with their name capitilized (1 ms)

// ● peopleList › creates a function that takes an array of objects and returns an array with a sentence about each person with their name capitilized

//   ReferenceError: peopleList is not defined


// b) Create the function that makes the test pass.
// PseudoCode
// Input: hitchhikerCharacters
// Output : ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
// Process: create a function called peopleList and pass in a parameter of an array. 
// Create another variable called newList that calls in a new function that will store the array that has been iterated through using .map ? I tried several ways to figure out how to get the array.map to store to a function, the internet search suggested to use the arrow syntax
// in so that we can return a terate through the function using a .map method
//create a variable that will store a new array use a method to take each key value pair and return them as a sentence ? using the .split method
//then add the .map method again to capitilize the word at the 0 index
//use a method to capitilize a the first word in the sentence in the array
//use the method .join to turn into array once more
//return 



// const peopleList = (array) => {
//   let newList => { 
//     array.map 
// } newList = array.split('').map(array[0].toUpperCase().join())
// }

// console.log(peopleList(hitchhikersCharacters))




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// describe("remainderList", () => {
//     it("creates a function that takes a mixed data array and returns an array of only the remainders of the number divided by 3", () => {
//     expect(remainderList(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//     expect(remainderList(hodgepodge2)).toEqual([ 2, 1, -1 ])
//  })
// })

//RED - Good failure
// FAIL  ./code-challenges.test.js
// remainderList
//   ✕ creates a function that takes a mixed data array and returns an array of only the remainders of the number divided by 3 (1 ms)

// ● remainderList › creates a function that takes a mixed data array and returns an array of only the remainders of the number divided by 3

//   ReferenceError: remainderList is not defined


// b) Create the function that makes the test pass.
//PseudoCode
//Input: const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//Output: [ 2, 0, -1, 0 ], [ 2, 1, -1 ]
//Process: Create a function aclled remainderList and pass in array as a parameter
//use the .filter method to filter through the array to find the data type of number, specify data type for the target data type using 'typeof', specify number
//map through the array to find the data type from above and divide by 3
//output is undefined

//const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

// const remainderList = (array) => {
//   array.filter(item => typeof item === "number").map(number => number % 3)
// }
// console.log(remainderList(hodgepodge1))




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// describe("cubedList", () => {
//     it("creates a function that takes an array of numbers and returns the sum of all the  numbers cubed", () => {
//     expect(cubedList(cubeAndSum1)).toEqual(99)
//     expect(cubedList(cubeAndSum1)).toEqual(1125)
//   })
// })


//RED- Good failure
// FAIL  ./code-challenges.test.js
//   cubedList
//     ✕ creates a function that takes an array of numbers and returns the sum of all the  numbers cubed (1 ms)

//   ● cubedList › creates a function that takes an array of numbers and returns the sum of all the  numbers cubed

//     ReferenceError: cubedList is not defined





// b) Create the function that makes the test pass.
//PseudoCode
//input: // const cubeAndSum1 = [2, 3, 4]
// const cubeAndSum2 = [0, 5, 10]
//output 99, 1125
//process
//create a function called cubedList that takes in an array as a parameter
//create a variable that gives the cubed number a place to go
//iterate through the array using a for loop
//call on newNum to equal the array at each index to be multiplied by 3

// const cubedList => (array) => {
//   let newNum = 0
//   for(let i=0; array.length < i; i++) {
//     newNum = array[i] * 3;
//   }
// }
// console.log(cubedList(cubedAndSum))