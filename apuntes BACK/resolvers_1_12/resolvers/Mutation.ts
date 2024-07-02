import { PersonModelType, PersonModel } from "../db/Person.ts"
import { getCityFromCP } from '../controllers/getCityFromCP.ts';
import { GraphQLError } from "graphql";


export const Mutation = {

    addPerson: async(parent_:unknown, args: {name: string, cp: string, iso: string}) : Promise<PersonModelType>=> {
        const {name, cp, iso} = args;
        const person = new PersonModel({name, cp, iso});
        await person.save();
        return person;
    },

    updatePerson: async(parent_:unknown, args: {id: string, name: string, cp: string, iso: string}) : Promise<PersonModelType>=> {
        const {id, name, cp, iso} = args;
        const person = await PersonModel.findById(id);
        if(!person){
            throw new GraphQLError("Person not found");
        }
        person.name = name;
        person.cp = cp;
        person.iso = iso;
        person.city=await getCityFromCP(cp,iso);//tenemos que hacer esto porque si no no se actualiza la ciudad


        await person.save();
        return person;
    },

    deletePerson: async(parent_:unknown, args: {id: string}) : Promise<PersonModelType>=> {
        const {id} = args;
        const person = await PersonModel.findByIdAndDelete(id);
        if(!person){
            throw new GraphQLError("Person not found");
        }
        return person;
    }
}