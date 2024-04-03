// function addNum(num1, num2) {
//   if (!num1 && num2) {
//     console.log("wrong arg");
//     return;
//   }

//   return num1 + num2;
// }

// const result = addNum(5, NaN);

// console.log(result);

function calcCartCost(...items) {
  return items;
}

const cart = calcCartCost("cable", "charger", "phone", "notebook");

console.log(cart.length);

const user = {
  user: "kartikay",
  rollNo: 28,
};

function student(baller) {
  return `my name is ${baller.user} and my Rollno is ${baller.rollNo}`;
}

console.log(student(user));
