import moongoose from "mongoose";
import { Event } from "../types.ts";
import { GraphQLError } from "graphql";

const Schema = moongoose.Schema;
const EventSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: Date, required: true},
    horaInicio: { type: Number, required: true },
    horaFin: { type: Number, required: true },
    invitados: [{ type: String, required: true }],
});

//Creamos un path para validar que la fecha sea valida

EventSchema.path("fecha").validate(async (fecha: Date) => {
    try{
        const fech = new Date(fecha);
        const hoy = new Date();
        if (fech < hoy) {
            return false;
        }
        return true;
    }catch(e){
        return new GraphQLError("Error al validar la fecha" || e.message);
    }
});

export type EventModelType= moongoose.Document & Omit<Event, "id">;
export const EventModel = moongoose.model<EventModelType>("Event", EventSchema);