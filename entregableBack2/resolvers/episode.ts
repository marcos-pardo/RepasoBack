import { GraphQLError } from "graphql";
import { Character, Episode } from "../types.ts";


const Episode ={
    characters: async(parent: Episode):Promise<Character[]> =>{
        const ch:Promise<Character>[] = parent.characters.map(async element =>{
            const response = await fetch (element);
            if (!response) {
                throw new GraphQLError(`No episode found with id ${element}`);
                }
            const data =  await response.json();
            const character ={
                id: data.id,
                name: data.name,
                episode: data.episode
            }
            return character;

        })

        const characters = await Promise.all(ch);
        return characters;

    }
}

export default Episode;