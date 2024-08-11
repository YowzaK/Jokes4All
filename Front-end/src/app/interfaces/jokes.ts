export interface Joke {
  id: string;
  type: number;
  types: string;
  joke: string;
}
export interface SubmitJokes {
  type: number;
  joke: string;
}
export interface Type {
  id: number;
  types: string;
}

export interface UnmoderatedJoke {
  _id: string;
  type: number;
  joke: string;
}
