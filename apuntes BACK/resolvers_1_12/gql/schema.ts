export const typeDefs = `#graphql

type City{
    name: String!
    persons: [Person!]!
}

type Person {
    id: ID!
    name: String!
    cp: String!
    iso: String!
    city: City!
    localTime: String!
    tiempo: Int!
}

type Query {
    person (id: ID!): Person
    
}

type Mutation {
    addPerson(name: String!, cp: String!, iso: String!): Person!
    updatePerson(id: ID!, name: String, cp: String, iso: String!): Person!
    deletePerson(id: ID!): Person!
    }

`;
