import { PersonModelType, PersonModel } from "../db/Person.ts"
import { GraphQLError } from "graphql";
import { getHora } from '../controllers/hora.ts';
import { getTiempo } from '../controllers/tiempo.ts';



export const Person = {
    localTime: async(parent: PersonModelType):Promise <string> => {
        console.log("estoy calculando la hora local");
        const city = parent.city;
        const hora = await getHora(city);
        return hora;
        
    },//es con coma, no con punto y coma
    tiempo: async(parent: PersonModelType):Promise <string> => {
        console.log("estoy calculando el tiempo");
        const city = parent.city;
        const tiempo = await getTiempo(city);
        return tiempo;
    }
}

