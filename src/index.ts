import * as path from "path";
import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { createConnection } from "typeorm";

const typeDefs = path.join(__dirname, "./schema.graphql");

const server = new GraphQLServer({ typeDefs, resolvers });
createConnection().then(() => {
  console.log("typeorm sync");
  server.start(() => console.log("Server is running on localhost:4000"));
});
