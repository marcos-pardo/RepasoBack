export type Character = {
    id: string;
    name: string;
    episode: string[];
}

export type Episode = {
    id: string;
    name: string;
    characters: Character[];
}