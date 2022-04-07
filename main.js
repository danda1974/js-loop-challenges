/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consiting of the true values.
 *
 * @param {boolean[]} booleanArr [true, true, false, false, true]
 * @return {boolean[]} [true, true, true]
 */

//export const removeFalseValues = (booleanArr) => {
//  return;
//};

const booleanArr = [true, true, false, false, true];
const removeFalseValues = booleanArr.filter((isTrue) => {
  return isTrue
});
console.log(removeFalseValues);


/**
 * A function that takes an array of numbers that are between 0 - 1.
 * The function needs to create a new array with the numbers converted into a percentage
 *
 * @param {number[]} numbersArr [1, .5, .7, .25]
 * @return {string[]} ["100%", "50%", "70%", "25%"]
 */

 //export const createPercentageList = (numbersArr) => {
 // return;
//};

// const numbers = [1, 0.5, 0.7, 0.25]; 
// const percentage = val => 100 * val;
// const newNumbers = numbers
// .map(percentage)
// console.log('input numbers', numbers)
// console.log('output numbers', newNumbers, '%') -> alle Zahlen richtig, aber nur hinten 1x %

// const percentage = val => 100 * val;
// const numbersArr = [1, 0.5, 0.7, 0.25];
// const createPercentageList = numbersArr
// .map((percentage) => `${percentage} %`)
// console.log(createPercentageList.toString()) -> die falschen Zahlen, aber mit %

// const numbers = [1, 0.5, 0.7, 0.25];
// const percentage = val => 100 * val;
// const newNumbers = numbers;
// const numbersArr = newNumbers
// const createPercentageList = numbersArr
// .map((percentage) => `${percentage} %`)
// console.log(createPercentageList.toString()) -> die falschen Zahlen, aber mit %

// wie bekomme ich die richtigen Zahlen und alle mit %?


/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */

// export const createListOfPoessessions = (possessionsArr, name) => {
//  return;
//};

// 
const name = 'disco'
const possession = ['shoes', 'jacket', 'belt']
for (let i = 0; i < possession.length; i++) {console.log('disco ' + possession[i])}

// const createListOfPossessions = (possessionArr, name) => {

// const newArr = possessions.map((possession) => `disco $(possession)`)
// console.log(newArr)

// const result = possession.forEach(possession => console.log('disco' possession))


/**
 * Intemediate Challenges
 */

/**
 * Have a look at the String method split()
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * You may need to use it below.
 */

/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */

 // export const convertStringToNumbersArray = (numberString) => {
 //  return;
// };

// const str = "1+2+3+4+5";
// const numbers = str.split('');
// console.log()

// const numberStr = "1+2+3+4+5";
// const numbersArr = numberStr.split('');
// console.log(numbers);

const numbersStr = "1,2,3,4,5";
const numbersArr = numbersStr.split(',');
const numbers = numbersArr.map((n) => {
  return parseInt(n, 10);
});
console.log(numbers);
// or --> ABER NIE VAR BENUTZEN !!!
// var numStr = "1,2,3,4,5";
// var nums = Array.from(numStr.split(','),Number);
// console.log(nums);


/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 */

// export const createOddEvenArray = (numberString) => {
//  return;
// };

const odds = [];
const evens = [];
const createOddEvenArray = (numberString) => numberString // take my numbers string "1+2+3+4+5"
    .split('+')        // split it with my divider and give me an array ["1", "2", "3", "4", "5"]
    .map(value => parseInt(value)); // do (to every element individually) convert to integer [1, 2, 3, 4, 5] 
    .map(parseIntvalue);
    arr.forEach(parseIntvalue => {
      if(parseIntvalue % 2 === 0){
         evens.push(parseIntvalue);
      }else{
         odds.push(parseIntvalue);
      };
   });
   return odds.length === 1 ? odds[0] : evens[0];
};
    
const resultConvert = createOddEvenArray("1+2+3+4+5")
console.log(resultConvert)


/**
 * A function that takes an array of book titles and a search term.
 * The function needs fo remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 */

 export const filterBooksBySearch = (booksArr, searchTerm) => {
  return;
};


/**
 * Advanced Challenges
 */

/**
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
 *
 * This function is failing the test's can you figure out why?
 * The bug is within the function, the test's are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} stringArr ["  dIsco", " ShOes "]
 * @return {string} "disco+shoes"
 */

export const formatStringArray = (stringArr) => {
  const cleanedArr = stringArr.forEach((string) => {
    const cleanStr = string.trim().toLowerCase();
    return cleanStr;
  });

  // console.log(???)

  const joinedString = cleanedArr.join("+");

  return joinedString;
};


/**
 * A function that takes a string, cleans it and formats it based on a condition.
 *
 * It will need to remove anything that is NOT a letter from the string.
 * - e.g numbers, punctuation, whitespace.
 *
 * If the index of the letter is even the letter needs to be Uppercase.
 * If the index of the letter is odd the letter needs to be Lowercase.
 *
 * @param {string} string " 22 $$He LL--O!%^& "
 * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
 */

export const formatString = (string) => {
  return;
};


/**
 * Expert Challenge
 */

/**
 * A function that takes an array and FizzBuzzes it.
 *
 * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
 *
 * If we were given [-1, "disco", "3", 5, "15", 2, 0]
 * We would be left with this ["3", 5, "15", 2]
 *
 * It then needs to create a NEW array from this clean array based on the conditons below:
 *
 * For multiples of three replace the number with "Fizz".
 * For multiples of five replace the number with "Buzz".
 * For numbers which are multiples of both three and five replace the number with "FizzBuzz".
 * All the other numbers need to be strings.
 *
 * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
 * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
 */

export const fizzBuzz = (mixedArray) => {
  return;
};