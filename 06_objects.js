const obj = {
  name: "kartikay",
  hobbies: "coding",
  age: 22,
  isWinning: false,
};

obj.profession = "footballer";

obj.greetings = function () {
  console.log(`hello ${this.name}`);
};

console.log(obj.greetings());

const obj2 = new Object();

const obj3 = {
  1: "one",
  2: "two",
};

const obj4 = {
  3: "three",
  4: "four",
};

const obj5 = Object.assign({}, obj3, obj4);

// console.log(obj5);

const result =
  Object.keys(obj); /*  git an array of all the keys in an object   */
const result2 =
  Object.values(obj); /*  git an array of all the values in an object   */
const result3 =
  Object.entries(obj); /*  git an array of all the key-values in an object   */

obj.hasOwnProperty("profession");

// console.log(obj.hasOwnProperty("profession"));

// Destructuring :

const baller = {
  name: "kartikay",
  position: "winger",
  club: "none",
  goals: 22,
};

const { position: where, club: team } = baller;

console.log(where, team);
