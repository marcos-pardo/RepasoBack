import { GraphQLError } from "graphql";

import { Character } from "../types.ts";

const Query ={


    characters:async(_:unknown, args: {id:string}): Promise<Character> =>{

        try{
            const{id} = args;
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
            if (!response) {
                throw new GraphQLError("User not found");
                }
            const data =  response.json();

                return data;
        }
        catch (e) {
            throw new GraphQLError(e.message);
            }

    },

    charactersById:async(_:unknown, args: {id:string[]}): Promise<Character[]> =>{

        try{
            const id = args.id.join();
            //const{id} = args;
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
            if (!response) {
                throw new GraphQLError("User not found");
                }
            const data =  response.json();

                return data;
        }
        catch (e) {
            throw new GraphQLError(e.message);
            }

    }






    
}
export default Query;