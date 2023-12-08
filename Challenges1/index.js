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

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
      return a - b
    })

    return args[0]
  }
}

const finder = new SmallestIntegerFinder()

console.log(finder.findSmallestInt([1, 3, 6, 3]))