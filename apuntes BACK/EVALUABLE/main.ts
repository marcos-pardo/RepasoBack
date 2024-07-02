import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { Character } from "./resolvers/character.ts";
import { Episode } from "./resolvers/episode.ts";
import { typeDefs } from "./gql/schema.ts";
import { Query } from "./resolvers/query.ts";


const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: { 
    Query,
    Character,
    Episode, 
  },
});


const { url } = await startStandaloneServer(server, {
    listen: {
      port: 3000,
    },
});
console.info("🚀 Server ready at port 3000");
