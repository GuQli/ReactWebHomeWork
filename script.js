"use strict";

// davaleba 1 //

//1.

const f1 = function (a, b) {
  return a === b ? "tolia" : "ar aris toli";
};

console.log(f1(2, 3));
// 2
const f2 = function (tempFar) {
  return Number(tempFar) ? Math.trunc(((tempFar - 32) * 5) / 9) : "false";
};
console.log(f2(74));
// 3
const f3 = function (a, b, operation) {
  if (isNaN(a) || isNaN(b)) return "not a number ";
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (
    operation !== "*" &&
    operation !== "/" &&
    operation !== "+" &&
    operation !== "-"
  )
    return false;
};

console.log(f3(2, 3, "")); // false
console.log(f3(2, 3, "*")); // 6
console.log(f3("e", 3, "*")); // not a number

// // davaleba 2 // //

// 1.
const users = [
  { name: "temo", age: 25 },
  { name: "lasha", age: 21 },
  { name: "ana", age: 28 },
];

const minage = function (users) {
  const min = users.find(
    (el) => el.age === Math.min(...users.map((item) => item.age))
  );

  console.log(`Youngest user: ${min.name} ${min.age} years old `);
};

minage(users);

// 2.

const users2 = users.map((users) => users);

// 3.

const diceGame = function () {
  // let diceRoll = Math.trunc(Math.random() * 6) + 1;

  let play = true;
  while (play) {
    let playerOne = Math.trunc(Math.random() * 6) + 1;
    let playerTwo = Math.trunc(Math.random() * 6) + 1;

    if (playerOne === 3) {
      play = false;
      return console.log("player one wins");
    }
    if (playerTwo === 3) {
      play = false;
      return console.log("player two wins");
    }
    if (playerOne === playerTwo) {
      play = false;
      return console.log("Draw");
    }
  }
};
diceGame();

// // // davaleba 3 // // //

//1.

const f4 = function (a, b, ...rest) {
  let mult = 1;
  for (const v of rest) {
    mult *= v;
  }
  return [a + b, mult];
};

console.log(f4(2, 2, 3, 4, 5));

// // function s pirdapir array rom mivawodot mashin rogor iqneba?
// // .reduce -it gaketeba ar sheidzleba?

// 2.

const user = {
  banks: [
    { adress: { city: "tbilisi" } },
    { adress: { city: "batumi" } },
    { adress: { city: "poti" } },
  ],
};

const getCity = function ({
  banks: [
    ,
    ,
    {
      adress: { city },
    },
  ],
}) {
  return city;
};

console.log(getCity(user));

//3.
const books = {
  book1: { type: "daf", pages: 6 },
  book2: { type: "dam", pages: 10 },
};

const f5 = function (books) {
  const newBooks = { ...books };
  return newBooks;
};

console.log(f5(books));

// // // // davaleba 4 // // // // leqcia #6

//1.
const f6 = function (string, valueToReplace, valueToReplaceWith) {
  const newString = string.split(" ");
  newString.splice(newString.indexOf(valueToReplace), 1, valueToReplaceWith);
  return newString.join(" ");
};

console.log(f6("a b c", "b", "z"));

//2.
const capitalize = (string) =>
  string
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

console.log(capitalize("hi How are you"));

//3.
const users3 = [
  { name: "lasha", age: 30 },
  { name: "saba", age: 20 },
  { name: "bondo", age: 15 },
];

const sort = (users) => users.sort((a, b) => a.age - b.age);
console.log(sort(users3));
