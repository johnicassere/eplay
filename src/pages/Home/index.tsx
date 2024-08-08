import { useEffect, useState } from "react"
import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"


//20230417105545
//https://fake-api-tau.vercel.app/api/eplay/esportes

export interface GallaryItem {
    type: 'image' | 'video'
    url: string
}

export type Game = {
    id:number;
    name: string;
    description: string;
    release_date?: string;
    prices: {
        discount?: number
        old?: number
        current?: number
    }
    details:{
        category:string
        system: string
        developer: string
        publisher:string
        linguages: string[]
    }
    media:{
        thumbnail: string
        cover: string
        gallery: GallaryItem[]
    }

}


const Home = () => {
    const [promocoes, setPromocoes] = useState<Game[]>([])
    const [emBreve, setEmBreve] = useState<Game[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
        .then((res) => res.json())
        .then((res) => setPromocoes(res))

        fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
        .then((res) => res.json())
        .then((res) => setEmBreve(res))
    },[])
    return(
        <>
          <Banner/>
          <ProductsList games={promocoes} title='Promoçoes' background='gray'/>
          <ProductsList games={emBreve} title='Em breve' background='black'/>
          </>
    )
}

export default Home