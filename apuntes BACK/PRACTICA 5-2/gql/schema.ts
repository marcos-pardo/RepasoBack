export const typeDefs = `#graphql

type Usuario {

    id: ID!
    name: String!
    email: String!
    colecciones: [Coleccion!]!
}

type Comic {

    id: ID!
    titulo: String!
    descripcion: String!
    formato: String!
}

type Coleccion {
    
    id: ID!
    nombre: String!
    comics: [Comic!]!
}

type Query {

    usuarioID(id: ID!): Usuario!
    usuariosTodos: [Usuario!]!
    Coleccion(id: ID!): Coleccion!
    comicId(id: ID!): Comic!
    comicTodos: [Comic!]!
}

type Mutation {
    
    addUsuario(name: String!, email: String!,coleccionIds: [String!]!): Usuario!
    deleteUsuario(id: ID!): Usuario!
    updateUsuario(id: ID!, name: String!, email: String!): Usuario!
    addColeccion(nombre: String!, comicIds: [String!]!): Coleccion!
    addComic(titulo: String!, descripcion: String!, formato: String!): Comic!
    deleteComic(id: ID!): Comic!
    updateComic(id: ID!, titulo: String!, descripcion: String!, formato: String!): Comic!
}

`;