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