import * as path from "path";
import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { createConnection } from "typeorm";
// import { Product } from "./entity/Product";

const typeDefs = path.join(__dirname, "./schema.graphql");

const server = new GraphQLServer({ typeDefs, resolvers });
createConnection().then(() => {
  console.log("typeorm sync");
  server.start(() => console.log("Server is running on localhost:4000"));
  // async function run() {
  //   console.log("function run");
  //   const product = new Product();
  //   product.title = "title two";
  //   product.description = "description one";
  //   const newProd = await product.save();
  //   console.log("newProd", newProd);
  // }
  // run();
});
