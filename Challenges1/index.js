//A greeting function

// function greet(name){
//   return `Hello ${name}, how are you doing today?`
// }

// console.log(greet("Kristina"))

//a population function that measure growth or decline in a town

// function nbYear(p0, percent, aug, p) {
//     let years = 0;

//     while (p0 < p) {
//       p0 += p0 * (percent / 100) + aug;
//       years++;
//     }

//     return years;
// }

// console.log(nbYear(1500000, 0.25, 1000, 2000000))

//A vowel count function

// function getCount(str) {
//   let vowels = 'aeiouAEIOU'
//   let vowelCount = 0

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       vowelCount += 1
//     }
//   }

//   return vowelCount
// }

// console.log(getCount("babushka"))

//Smallest Integer in the Array Function

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     args.sort(function(a, b) {
//       return a - b
//     })

//     return args[0]
//   }
// }

// const finder = new SmallestIntegerFinder()

// console.log(finder.findSmallestInt([1, 3, 6, 3]))

//Tribonacci Sequence Function

// function tribonacci(sig, n) {
//   if (n === 0) return [];

//   if (n < 3) return sig.slice(0, n);

//   for (let i = 3; i < n; i++) {
//     sig.push(sig[i - 1] + sig[i - 2] + sig[i - 3]);
//   }

//   return sig
// }


// console.log(tribonacci([1, 1, 1], 10))

//Clock Function

// function past(h, m, s) {
//   if (!(0 <= h <= 23) || !(0 <= m <= 59) || !(0 <= s <= 59)) {
//     return "error"
//   }

//   let time = (h * 3600000) + (m * 60000) + (s * 1000)
//   return time
// }


// console.log(past(0, 1, 1))

//Pangram Function

// function isPangram(string){
//   let lowerString = string.toLowerCase()

//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (lowerString.indexOf(char) === -1) {
//       return false
//     }
//   }

//   return true
// }

// console.log(isPangram("Some random string"))

//Square Every Digit Function 

// function squareDigits(num) {
//   let squaredArr = String(num).split("").map((digit) => {
//     return Number(digit) * Number(digit)
//   })

//   let concatNum = squaredArr.join("")

//   return Number(concatNum)
// }

// console.log(squareDigits(3212))

//Find the Odd Integer Function 

// function findOdd(A) {
//   let count = {};

//   for (i = 0; i < A.length; i++) {
//     let num = A[i];
//     count[num] = (count[num] || 0) + 1;
//   }

//   for (let num in count) {
//     if (count[num] % 2 !== 0) {
//       return parseInt(num)
//     }
//   }
// }

// console.log(findOdd([1, 20, 1, 2, 2]))

//Printer Error Function 

// function printerError(s) {
//    let errorCount = 0;

//    for (let i = 0; i < s.length; i++) {
//      if (s[i] < 'a' || s[i] > 'm') {
//       errorCount++;
//      }
//    }

//    return errorCount + '/' + s.length
// }

// console.log(printerError("aaabbbbhaijjjm"))

//Two to One Function

// function longest(s1, s2) {
//   let combined = (s1 + s2).split('')

//   let filteredAndSorted = combined.filter(char => /^[A-Za-z]+$/.test(char)).sort()

//   let uniqueChars = [...new Set(filteredAndSorted)].join('')

//   return uniqueChars
// }

//Average Function

// function findAverage(array) {
//     let average = 0;

//     if (array.length === 0) {
//         return average;
//     }

//     for (let i = 0; i < array.length; i++) {
//         average += array[i]
//     }

//     average = average / array.length

//     return average
// }

//Odd or Even Function

// function oddOrEven(array) {
//     let sum = 0;
//     let result = "";

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }

//     if (sum % 2 === 0) {
//         let result = "Even"
//     } else if (sum % 2 !== 0) {
//         let result = "Odd"
//     }

//     return result;
// }

//Function of Love 

// function lovefunc(flower1, flower2){
//   let match = false;

//   if ((flower1 % 2 === 0  && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 == 0)) {
//     match = true;
//   } 

//   return match
// }


// Jaden Smith function

// function jadenSmith(str) {
//   let words = str.split(' ');
//   let result = [];

//   for (let word of words) {
//     result.push(word.charAt(0).toUpperCase() + word.slice(1))
//   }

//   return result.join(' ');
// };

// console.log(jadenSmith("you can loop through words in a string"))

//Needle in a Haystack Function 

// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === "needle") {
//         return `found the needle at position ${i}`
//     } 
// }
//     return "no needle found"
    

// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

//Reverse Sequence function 

// const reverseSeq = n => {
//     let reversed = [];

//     if (n > 0) {
//         for (let i = n; i > 0; i--) {
//             reversed.push(i)
//         }
//     }

//     return reversed
// };

// console.log(reverseSeq(5))

//Sheep Count function

// function countSheeps(sheep) {
//   let count = 0;

//   for (i = 0; i < sheep.length; i++) {
//     if (sheep[i] === true) {
//         count += 1;
//     }
//   }

//   return count;
// }

// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]))

//Count Positives and Sum Negatives Function

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return []
//   }

//   let positiveCount = 0;
//   let negativeSum = 0

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//         positiveCount += 1
//     } else if (input[i] < 0) {
//         negativeSum += input[i]
//     } 
//   }

//   let result = [positiveCount, negativeSum]
//   return result
// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

//Reverse digits function

// function digitize(n) {
//   let nArray = String(n).split('')

//   return nArray.reverse().map(num => parseInt(num))
// }

// console.log(digitize(76717))

//List Filter Function

// function filter_list(l) {
//   let filteredList = l.filter(item => typeof item !== 'string');
//   return filteredList;
// }

// console.log(filter_list([1,2,'a','b']))

//Fake Binary Function 

// function fakeBin(x){
//     let xArray = x.split('')

//     for (let i = 0; i < xArray.length; i++) {
//         if (xArray[i] < 5) {
//             xArray[i] = '0'
//         } else if (xArray[i] >= 5) {
//             xArray[i] = '1'
//         }
//     } 

//     return xArray.join('')
// }

// console.log(fakeBin("1627638"))

//Hydration Function

// function liters(time) {
//     let liters = Math.floor(time * 0.5)

//     return liters
//   }

//   console.log(liters(7.9))

//