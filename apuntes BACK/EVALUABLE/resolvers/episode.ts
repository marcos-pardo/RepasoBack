import { CharacterAPIType, EpisodeAPIType } from "../types.ts";
import {GraphQLError} from "graphql";


export const Episode = {
  characters: async (parent: EpisodeAPIType): Promise<CharacterAPIType[]> => {
    
    const characters = parent.characters;
    const charactersAPI = await Promise.all(
      
        characters.map(async (url) => {
        const data = await fetch(url);
        if(data.status !== 200) throw new GraphQLError("Error");
        return await data.json();
      })
    );

    return charactersAPI;
  },
};
