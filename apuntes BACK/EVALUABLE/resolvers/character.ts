import { CharacterAPIType, EpisodeAPIType } from "../types.ts";
import {GraphQLError} from "graphql";


export const Character = {
  episode: async (parent: CharacterAPIType): Promise<EpisodeAPIType[]> => {

    const episodes = parent.episode;
    const episodesAPI = await Promise.all(

      episodes.map(async (url) => {
        const data = await fetch(url);
        if(data.status !== 200) throw new GraphQLError("Error");
        return await data.json();
      })
    );

    return episodesAPI;
  },
};
