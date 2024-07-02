import mongoose from "npm:mongoose@7.6.3";
import { UsuarioModelType } from "./db/Usuario.ts";
import { ComicModelType } from "./db/Comic.ts";
import { ColeccionModelType } from "./db/Coleccion.ts";
import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";
import { Usuario } from "./resolvers/Usuario.ts";
import { Coleccion } from "./resolvers/Coleccion.ts";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./gql/schema.ts";

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

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      Usuario,
      Coleccion,
    },
  });

  const { url } = await startStandaloneServer(server, { listen: { port: 4000 },}); // Se pone el puerto 4000
  console.log(`🚀 Server ready at ${url} 🚀`);
} catch (error) {
  console.log(error);
}
