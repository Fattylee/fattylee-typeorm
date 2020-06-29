interface ObjType {
  title?: string;
  body?: string;
}

let obj: ObjType = {};
obj.title = "title one";
obj.body = "description one";

type toStringType = () => string;

obj.toString = function toString() {
  return this.title + " " + this.body;
};
Object.defineProperty(obj, "toString", {
  enumerable: false,
  configurable: false,
});
Object.defineProperty(obj, "toString", {
  enumerable: true,
});

// obj.toString = "hi";
// obj.age = 23;
console.log(obj);
console.log(obj.toString());
