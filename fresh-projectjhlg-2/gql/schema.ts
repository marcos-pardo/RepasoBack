export const typeDefs = `#graphql

scalar Date #definir el tipo fecha para graphql

    type Event {
        id: ID!
        titulo: String!
        descripcion: String!
        fecha: Date!
        horaInicio: Int!
        horaFin: Int!
        invitados: [String!]!
    }

    type Query{
        getEvents: [Event!]!
        getEvent(id: ID!): Event!
    }

    type Mutation{
        createEvent(
            titulo: String!
            descripcion: String!
            fecha: Date!
            horaInicio: Int!
            horaFin: Int!
            invitados: [String!]!
        ): Event!
        updateEvent(
            id: ID!
            titulo: String
            descripcion: String
            fecha: String
            horaInicio: Int
            horaFin: Int
            invitados: [String!]
        ): Event!
        deleteEvent(id: ID!): Event!
    }
`;
