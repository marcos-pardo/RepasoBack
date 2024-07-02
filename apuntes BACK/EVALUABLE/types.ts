// esto se saca metiendo la url con parametros 
// metemos los datos unicamente que nos interesan

export type CharacterAPIType = {
    id: number;
    name: string;
    episode: string[];
  };
  
  export type EpisodeAPIType = {
    id: number;
    name: string;
    characters: string[];
  };
  
  // Los que tengo que devolver yo
  export type Character = {
    id: number;
    name: string;
    episode: Episode[];
  };
  
  export type Episode = {
    id: number;
    name: string;
    characters: Character[];
  };