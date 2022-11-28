console.log("hiii");

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
