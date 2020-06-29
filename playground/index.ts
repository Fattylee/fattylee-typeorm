let strArr: string[];
let arr: Array<number>;
let num: number;
arr = [1, 2, 3];
// strArr = ["vvg", 2];
// console.log(arr);
num = 23;
const boolArr: Array<boolean> = [!!2, true, false];
const nums: (boolean | string | number)[] = ["true", 2, 3];
nums.push(true);
type tupleType = [string, number, number];
const tupleArr: tupleType = ["next", 23, Number(true)];
tupleArr.push(2, 3, 4, 1, 3, "2");
tupleArr.splice(0, tupleArr.length);
// tupleArr.splice(0, 0, "");
// console.log(num);
let tp: [string, number];
tp = ["23", 3];
tp.unshift(9, 0);
const empty: null = null;
const voidType: void = undefined;
const undefinedType: undefined = undefined;
// console.log(tp);
// console.log(tupleArr);
function sum(num1: any, num2: any): number {
  const res = num1 + num2;
  console.log(
    typeof res,
    strArr,
    arr,
    num,
    boolArr,
    empty,
    voidType,
    undefinedType
  );
  return res;
}
sum(2, 1);
// console.log(sum("2a", 1));
interface IRequired {
  name: string;
  // private age: number;
  getInfo(num: string): number;
}

class User implements IRequired {
  // name: string;
  // protected age: number;

  constructor(public name: string, private age: number) {
    // this.name = "loll";
    // this.age = age;
    console.log(this.name + " Created!");
  }

  private papa(some: string) {
    console.log("Hi, papa! " + some);
  }

  getInfo(gender: string): number {
    this.papa(gender);
    return 3;
  }

  get giveMeAge() {
    return this.age;
  }
  set giveMeAge(value) {
    this.age = value;
  }
}
const abu = new User("abu", 23);
// console.log(abu.age);
abu.getInfo("male");
// abu.papa();
// carlos mafla
abu.giveMeAge = 39;
let myAge: any = "e9ekl";
myAge = 272;
// console.log((myAge as string).endsWith("a"));
// console.log((<string>myAge).length);

console.log("giveMeAge", abu.giveMeAge, myAge);
enum Colors {
  WHITE = "myAge",
  BLUE = 45,
  RED = "red",
}
Colors.RED;
// console.log(Colors.RED);
// console.log(typeof Colors.BLUE, Colors.BLUE);
// console.log(Colors.WHITE);

class Product {
  constructor(
    public readonly title: string,
    public readonly body: string,
    public price: number,
    public isAvailable: boolean
  ) {}
}
const milk = new Product("milk", "buy it for a healthy growth", 30, false);
console.log(milk);

class ManageProduct {
  private products: Product[] = [];
  constructor(proudct: Product) {
    this.products.push(proudct);
  }

  getAll() {
    return this.products;
  }
}

const mProduct = new ManageProduct(milk);
console.log(mProduct.getAll(), "=".repeat(100) + "\n\n", mProduct);

const readMe: ReadonlyArray<number> = [1, 2, 3];
readMe.slice(0, 3);
// readMe.shift();
console.log(readMe, readMe.length);

// readMe.push(2);
const users = [
  { name: "abu", age: 21 },
  { name: "ummu", age: 11 },
];
type U = {
  name: string;
  age: number;
  salary: number;
  mama?: string;
};
const user: U = {
  name: "fattylee",
  age: 39,
  salary: 8196725656,
};
user.name = "leee";
user.mama = "true";
const { age, ...rest } = user;
console.log(rest);
for (const { name, age } of users) {
  console.log("name \
              is\
              ", name, age);
}

