import mongoose from "mongoose";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone" 
import { typeDefs } from "./gql/schema.ts";
import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";
import { Person } from "./resolvers/Person.ts";
import { City } from "./resolvers/City.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

try {

  const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

  if (!MONGO_URL) {
    console.log("No se ha encontrado la variable de entorno MONGO_URL");
    Deno.exit(1);
  }

  await mongoose.connect(MONGO_URL);
  console.log("Conectado a MongoDB");
  mongoose.connect(MONGO_URL);

    const server = new ApolloServer({
        typeDefs,
        resolvers: {
          Query,
          Mutation,
          Person,
          City
        },
    });
    const { url } = await startStandaloneServer(server);
    console.log(`🚀 Server ready at ${url}`);

}catch (error) {
    console.log(error);
  }




