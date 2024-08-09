import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'


const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fake-api-tau.vercel.app/api/eplay`
    }),
    endpoints: (builder) => ({
        //Banner
        getFeaturedGame: builder.query<Game, void>({
            query: () => 'destaque'
        }),
        //Home => (promocões, em breve)
        getOnSale: builder.query<Game[], void>({
            query: () => 'promocoes'
        }),
        getSoon: builder.query<Game[], void>({
            query: () => 'em-breve'
        }),
        //Categorias
        getActionGame: builder.query<Game[], void>({
            query: () => 'acao'
        }),
        getSportGames: builder.query<Game[], void>({
            query: () => 'esportes'
        }),
        getSimulationGame: builder.query<Game[], void>({
            query: () => 'simulacao'
        }),
        getFightGame: builder.query<Game[], void>({
            query: () => 'luta'
        }),
        getRpgGame: builder.query<Game[], void>({
            query: () => 'rpg'
        }),
        getGame: builder.query<Game, string>({
            query: (id) => `jogos/${id}`
        }),
    })
})

export const { 
    useGetFeaturedGameQuery, useGetOnSaleQuery, useGetSoonQuery, 
    useGetActionGameQuery, useGetSportGamesQuery, useGetFightGameQuery, 
    useGetRpgGameQuery, useGetSimulationGameQuery, useGetGameQuery
 } = api
export default api