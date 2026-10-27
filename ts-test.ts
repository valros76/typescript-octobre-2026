export type customNumber = 12|42|72|92;

function calcAdd(a: number, b: customNumber, ...rest: number[]): number{
  return a + b;
}

const productsA = [
  {
    name: "a"
  },
  {
    name: "b"
  }
];

const productsZ = [
  {
    name: "y"
  },
  {
    name: "z"
  }
];

const productsList = [
  ...productsA,
  "m",
  "n",
  ...productsZ,
];

const user = {
  lastname: "dufrene",
  firstname: "valerian",
  email: "webdevoo.pro@gmail.com"
}

const myUser = {
  ...user,
  email: "valerian.dufrene@gmail"
};
console.table(
  myUser
);