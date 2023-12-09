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

function past(h, m, s) {
  if (!(0 <= h <= 23) || !(0 <= m <= 59) || !(0 <= s <= 59)) {
    return "error"
  }

  let time = (h * 3600000) + (m * 60000) + (s * 1000)
  return time
}


console.log(past(0, 1, 1))