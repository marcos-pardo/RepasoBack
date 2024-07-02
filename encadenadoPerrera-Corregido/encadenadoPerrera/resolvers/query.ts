import { GraphQLError } from "graphql";
import { PetModel, PetModelType } from "../db/Pet.ts";
import { PersonModel, PersonModelType } from "../db/Person.ts";

export const Query = {
    pets: async ():Promise<PetModelType[]> => {
        const pets = await PetModel.find().exec()
        return pets
    },
    pet: async (_:unknown, args:{id:string}):Promise<PetModelType> => {
        const pet = await PetModel.findById(args.id).exec()
        if (!pet) throw new GraphQLError("Pet not found")
        return pet
    },
    persons: async ():Promise<PersonModelType[]> => {
        const persons = await PersonModel.find().exec()
        return persons
    },
    person: async (_:unknown, args:{id:string}):Promise<PersonModelType> => {
        const person = await PersonModel.findById(args.id).exec()
        if (!person) throw new GraphQLError("Person not found")
        return person
    },
}