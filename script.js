console.log("hiii");

// davaleba 1

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
