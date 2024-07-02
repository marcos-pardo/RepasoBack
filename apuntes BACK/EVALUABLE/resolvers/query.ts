import {GraphQLError} from "graphql";
import { CharacterAPIType } from "../types.ts";

export const Query = {
  character: async (_parent: unknown, args: { id: string }): Promise<CharacterAPIType> => {
    
    const id = args.id;
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    
    if(data.status === 404) throw new GraphQLError("Error");

    const response = await data.json();

    return response;

  },

  charactersByIds: async (_parent: unknown, args: { ids: string[] }): Promise<Array<CharacterAPIType>> => {
    
    const { ids } = args;
    const characters = await fetch(`https://rickandmortyapi.com/api/character/${ids.toString()}`);
   
    return characters.json();
  },
};