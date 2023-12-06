import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TGetPokemonDescriptionArgs, TGetPokemonDescriptionReturn, TGetPokemonListArgs, TGetPokemonListReturn } from './types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  tagTypes: ['pokemons'],
  endpoints: builder => ({
    getPokemonList: builder.query<TGetPokemonListReturn, TGetPokemonListArgs>({
      query: () => '/pokemon',
      transformResponse: (response: {results: Array<{ name: string; url: string }>}) => {
        // transform my response to store in a different format on the reducers
        return response.results.map(result => ({ name: result.name, id: result.url.split('/')[6] }));
      },
      providesTags: ['pokemons']
    }),

    getPokemonDescription: builder.query<TGetPokemonDescriptionReturn, TGetPokemonDescriptionArgs>({
      query: ({id}) => `/pokemon/${id}`,
      providesTags: ['pokemons']
    }),
  })
})

export const { 
  useGetPokemonListQuery,
  useGetPokemonDescriptionQuery
} = apiSlice;
