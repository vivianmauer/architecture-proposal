'use client';

import { useGetPokemonDescriptionQuery, useGetPokemonListQuery } from "@/stores/keyholder/api";
import { selectKeyHolderValue } from "@/stores/keyholder/features/holders/selectors";

import { useKeyHolderDispatch, useKeyHolderSelector } from "@/stores/keyholder/hooks";
import type { NextPage } from "next";

const SignIn: NextPage = () => {
  const value = useKeyHolderSelector(selectKeyHolderValue);
  const dispatch = useKeyHolderDispatch();

  //logic for dependent queries
  const { data: pokemons } = useGetPokemonListQuery();
  //this will only trigger if the pokemons[0].id exists
  const {data: pokemonDescription} = useGetPokemonDescriptionQuery({id: pokemons?.[0].id! }, {skip: !pokemons?.[0].id});

  return (
    <div>
      <h1>Example</h1>
      <p>Pokemon Description:</p>
      <p>{JSON.stringify(pokemonDescription, null, 2)}</p>
    </div>
  );
}

export default SignIn;