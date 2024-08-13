import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

type Product = {
    id: number
    price: number
}

type PurchasePayload= {
    products: Product[]
    billing: {
        name: string
        email: string
        document: string
    }
    delivery: {
        email: string
    }
    payment: {
        card: {
            active: boolean
            owner?: {
                name: string
                document: string
    }
    name?: string
    number?: string
    expires?: {
        month: number
        year: number
    }
    code?: number
}
    installments: number
}
}

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
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method:'POST',
                body
            })
        })
    })
})

export const { 
    useGetFeaturedGameQuery, useGetOnSaleQuery, useGetSoonQuery, 
    useGetActionGameQuery, useGetSportGamesQuery, useGetFightGameQuery, 
    useGetRpgGameQuery, useGetSimulationGameQuery, useGetGameQuery,
    usePurchaseMutation
 } = api
export default api