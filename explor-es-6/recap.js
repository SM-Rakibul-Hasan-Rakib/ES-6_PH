const numbers = [4, 5, 6, 2, 8];

function doubleIt(num) {
  console.log("num now", num);
  return num * 2;
}

const result = numbers.map(doubleIt);

// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }

// console.log(doubled);
