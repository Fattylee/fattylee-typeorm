import { request } from "graphql-request";
import { host } from "./constants";
import { User } from "../entity/User";

it("should register user", async () => {
  const email = "fatb1@gmail.com";
  const password = "123456";
  const mutation = `
    mutation {
      register(
        email,
        password
      )
    }
  `;
  const res = await request(host, mutation);
  console.log(res);
  expect(res).toEqual(
    expect.objectContaining({
      register: "true",
    })
  );
  User.find({ where: { email } });
});
