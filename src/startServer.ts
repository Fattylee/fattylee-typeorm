import "reflect-metadata";
import * as path from "path";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import {} from "typeorm";
import { createTypeormConnection } from "./db/createTypeormConnection";

const startServer = async () => {
  const typeDefs = path.join(__dirname, "./schema.graphql");

  const server = new GraphQLServer({ typeDefs, resolvers });
  console.log("NODE_ENV:", process.env.NODE_ENV);
  await createTypeormConnection();
  const app = await server.start({
    port: process.env.NODE_ENV === "test" ? 0 : 4000,
  });
  console.log("server started success");
  console.log("typeorm sync");
  return app;
};

export { startServer };
