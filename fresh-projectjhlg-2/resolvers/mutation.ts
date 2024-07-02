import { GraphQLError } from "graphql";
import { EventModel,EventModelType } from "../db/Event.ts";

export const Mutation = {
    createEvent: async (_: unknown, args: {titulo: string, descripcion: string, fecha: Date, horaInicio: number, horaFin: number, invitados:string[]}):Promise<EventModelType>=> {

        //Importante convertir la fecha a Date
        const event = {titulo: args.titulo, descripcion: args.descripcion, fecha: args.fecha, horaInicio: args.horaInicio, horaFin: args.horaFin, invitados: args.invitados};
        
        //Comprombar que todos los campos esten llenos, sino mostrar un error 400
        if(!event.titulo || !event.fecha || !event.horaInicio || !event.horaFin || !event.invitados) throw new GraphQLError("Todos los campos son requeridos",{extensions: {statusCode:400}});
        
        //Comoprobamo que la fehca de inicio es menor o igual que la hora de fin, sino mostrar un error 400
        if(event.horaInicio >= event.horaFin) throw new GraphQLError("La hora de inicio debe ser menor a la hora de fin",{extensions: {statusCode:400}});        

        //Comprobamos que la fecha sea valida, sino mostrar un error 400
        //if(new Date(event.fecha) < new Date()) throw new GraphQLError("La fecha no puede ser menor a la fecha actual",{extensions: {statusCode:400}})
        
        //Comporbamos si existe solape temporal de fechas con otra agenda
        const agendas = await EventModel.find({ fecha: event.fecha });
            for (let i = 0; i < agendas.length; i++) {
            for(let j=0; j <agendas.length; j++){
                if (agendas[i].fecha === agendas[j].fecha ) throw new GraphQLError("Las fecha se solapan",{extensions: {statusCode:400}});        
            }
        };
        
        const newEvent = await EventModel.create(event);
        //Si el el evento se ha creado correctamente se devuelve el evento

        
        
        return newEvent;
    },

    updateEvent: async (_: unknown, args: {id: string, titulo?:string, descripcion?:string, fecha?:Date, horaInicio?: number, horaFin?: number, invitados?:string[]}):Promise<EventModelType>=> {
        const event = await EventModel.findByIdAndUpdate(args.id, {titulo: args.titulo, descripcion: args.descripcion, fecha: args.fecha, horaInicio: args.horaInicio, horaFin: args.horaFin, invitados: args.invitados} ,{new: true});
        if(!event) throw new GraphQLError("Evento no encontrado");
        return event;
    },

    deleteEvent: async (_: unknown, args: {id: string}):Promise<EventModelType>=> {
        const event = await EventModel.findByIdAndDelete(args.id).exec();
        if(!event) throw new GraphQLError("Evento no encontrado");
        return event;
    }
};
