import * as bcrypt from "bcryptjs";
import { ResolverMap } from "./types/graphql-utils";
import { User } from "./entity/User";
import { Product } from "./entity/Product";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_: any, { name }) => `Hello ${name || "World"}`,
    getAllProducts: async () => await Product.find(),
    getProduct: async (_, { id }) => {
      // Product.re;
      try {
        const product = await Product.findOne(id);
        if (!product) throw new Error("Product not found");
        return product;
      } catch (err) {
        // log console.error();
        throw new Error(err.message);
      }
    },
  },
  Mutation: {
    register: async (_: any, { email, password }) => {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = User.create({ email, password: hashPassword });
      await user.save();
      return true;
    },
    async createProduct(_, { data: { title, description } }) {
      return await Product.create({ title, description }).save();
    },
  },
};
