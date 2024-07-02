import { typeDefs } from "./gql/schema.ts";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import Pet  from "./resolvers/Pet.ts";
import { Person } from "./resolvers/Person.ts";

const MONGO_URL = Deno.env.get("MONGO_URL"); 

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Person,
    Pet,
  }
});

const { url } = await startStandaloneServer(server)
console.info(`🚀 Server ready at ${url}`);