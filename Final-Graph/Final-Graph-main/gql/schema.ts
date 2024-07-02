export const typeDefs = `#graphql

type Contacto {

    id: ID!,
    nombre: String!,
    apellido: String!,
    numTelefono: String!,
    pais: String!,
    capital: String!,
    #datetime: String!,
} 

type Query {

    getContact(id:ID!): Contacto!
    getContacts: [Contacto!]!
},

type Mutation { 

    addContact(nombre: String!, apellido: String!, numTelefono: String!): Contacto!
    deleteContact(id: ID!): Contacto!
    updateContact(id: ID!, nombre: String!, apellido: String!, numTelefono: String!): Contacto!
}
`;
