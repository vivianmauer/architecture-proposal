export type TGetPokemonListReturn = Array<{
  name: string;
  id: string;
}>;
export type TGetPokemonListArgs = void;

export type TGetPokemonDescriptionReturn = {
  id: string;
  name: string;
  height: number;
  weight: number;
};
export type TGetPokemonDescriptionArgs = { 
  id: string;
};
