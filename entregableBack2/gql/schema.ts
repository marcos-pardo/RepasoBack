
export const typeDefs = `#graphql

type Character {
    id: ID!
    name: String!
    episode: [Episode!]!
 }
 
 type Episode {
   id: ID!
   name: String!
   characters: [Character!]!
 }
 
 type  Query {
    characters(id: ID!): Character #devuelve un personaje segú su id
    charactersById(id: [ID!]!): [Character] #devuelve un array de personajes según sus ids
 }
 `