
export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    gender: string;
  }

  export interface Callback { 
    updatePosts: (value: Character[]) => void;

}