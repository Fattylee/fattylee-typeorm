import { startServer } from "../startServer";

// import { request } from "graphql-request";
beforeAll(async () => {
  console.log("b4 all");
  const app = await startServer();
  const {} = app.address();
  console.log("port", port);
});
type sumFunc = (a: number, b: number) => number;
const sum: sumFunc = function sum(a, b) {
  return a + b;
};

// [coc.nvim] Schema error: Problems loading reference 'http://json.schemastore.org/package': getad
// drinfo ENOTFOUND json.schemastore.org
// const start = async () => {
//   const query = `mutation{
//     register(email: "hello@emil.com", password:"123456")
//   }`;
//   const res = await request("http://localhost:4000", query);
//   console.log(res);
// };
// start();

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
