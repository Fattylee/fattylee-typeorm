import * as bcrypt from "bcryptjs";
import { ResolverMap } from "./types/graphql-utils";
import { User } from "./entity/User";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_: any, { name }) => `Hello ${name || "World"}`,
  },
  Mutation: {
    register: async (_: any, { email, password }) => {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = User.create({ email, password: hashPassword });
      console.log(user);
      await user.save();
      return true;
    },
  },
};
