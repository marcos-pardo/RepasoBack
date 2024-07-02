import { GraphQLError } from "graphql";
import { EventModel,EventModelType } from "../db/Event.ts";

export const Query = {
    getEvents: async (): Promise<EventModelType[]> => {
        const events = await EventModel.find().exec();
        if(!events) throw new GraphQLError("Error al cargar los eventos");
        return events;
    },

    getEvent: async (_: unknown, args: { id: string }): Promise<EventModelType> => {
        const event = await EventModel.findById(args.id).exec();
        if(!event) throw new GraphQLError("Evento no encontrado");
        return event;
    },
}