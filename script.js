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

// // // // // davaleba 5 // // // // // leqcia #7
const body = document.querySelector("body");
const button = document.querySelector(".hider");
const divText = document.querySelector("#text");

// 1. hide div element

button.addEventListener("click", function () {
  divText.classList.toggle("hidden");
});

// 2. insert HTML to DOM
body.insertAdjacentHTML(
  "beforeend",
  `
  <div id="card">
  <h2>GuQli</h2>
  <a href="#">Go To Profile</a>
  </div>`
);

// 3. background color - RED
const card = document.querySelector("#card");
card.style.backgroundColor = "red";

// // // davaleba 6 // // // leqcia #9

// 1. create button opening MODAL window with Black background

const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", modalOpen);
btnCloseModal.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);

// 2. change body color by input value

const btnInput = document.querySelector(".btn-input");
const input = document.getElementById("change-color");

// const changeBodyColor = function () {
//   let color = input.value;
//   if (
//     color === "red" ||
//     color === "blue" ||
//     color === "green" ||
//     color === "black" ||
//     color === "white"
//   ) {
//     body.style.background = `${color}`;
//   } else
//     alert(
//       "Please input on of the following colors: red, blue, green, black, white "
//     );
// };

// // Improved Version

const colors = ["red", "blue", "green", "black", "white"];
const changeBodyColor1 = function () {
  let color = input.value;
  colors.includes(color)
    ? (body.style.background = color)
    : alert(
        '"Please input on of the following colors: red, blue, green, black, white "'
      );
};

btnInput.addEventListener("click", changeBodyColor1);

// 3 display average according to input data
const result = document.querySelector(".result");
const calcAvgBtn = document.querySelector(".btn-avg");
const inputAvg = document.getElementById("calc-avg");

console.log(result);
calcAvgBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const numbers = inputAvg.value.split(":");
  const avg =
    numbers.map((n) => +n).reduce((acc, cur) => acc + cur, 0) / numbers.length;
  if (!avg) return;
  result.textContent = `Average = ${avg}`;
});
