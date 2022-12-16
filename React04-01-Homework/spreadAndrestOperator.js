// Spread operator

// Ex 1
let productsToAdd = ["Apples", "Bread"];
let productsIHave = ["Meat", ...productsToAdd, "Lemons", "Salt", "Soda"];

console.log(productsIHave);

//Ex 2
let arr = [1, 2, 3];
let arr2 = [...arr];
arr2.push(4);
console.log(arr);
console.log(arr2);

//Ex 3
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

array1 = [...array1, ...array2];
console.log(array1);

//Rest Operator

//Ex 1

function sum(...args) {
  let total = 0;

  for (let i in args) {
    total += args[i];
  }
  return total;
}

console.log("The total is " + sum(1, 2, 3, 4, 5));

// Ex 2

function displayUser(firstName, lastName, ...nickName) {
  console.log(firstName, nickName.join(""), lastName);
}

displayUser("Alex", "Popescu", "RestOP1 ", "RestOP2 ", "RestOP3 ");
