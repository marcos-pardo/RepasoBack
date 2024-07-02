
import { PersonModelType, PersonModel } from "../db/Person.ts"
import { GraphQLError } from "graphql";

export const City = {
    name: (parent: string):string => parent,//parent es string porque city es string
    persons: async(parent: PersonModelType):Promise <PersonModelType[]> => {
        //const city = parent.city;
        const p = await PersonModel.find({city: parent}).exec();
        return p;
    }

}