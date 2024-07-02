
import { PersonModelType, PersonModel } from "../db/Person.ts"
import { GraphQLError } from "graphql";

export const Query = {
    person: async (_: any, args: { id: string }): Promise<PersonModelType> => {
        try{
            const p = await PersonModel.findById(args.id);
            if(!p){
                throw new GraphQLError("Person not found");
            }
            return p;
        }catch(e){
            throw new GraphQLError(e.message);
        }
    },

    };