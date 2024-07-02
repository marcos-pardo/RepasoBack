import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./gql/schema.ts";
import  Query from "./resolvers/Query.ts";
import Episode from "./resolvers/episode.ts";
import Character from "./resolvers/character.ts";
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query,
    Episode,
    Character
  },
});
const { url } = await startStandaloneServer(server, { listen: { port: 3000 } });
console.info(" Server ready at port 3000");
