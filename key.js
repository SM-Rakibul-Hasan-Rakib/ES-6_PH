const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

// console.log(glass);
const kiss = Object.values(glass);
console.log(kiss);
const kiss2 = Object.keys(glass);
console.log(kiss2);

const person = {
  name: rakib,
  age: 18,
};
delete person.age;
console.log(person);
