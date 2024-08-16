import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'



//20230417105545
//https://fake-api-tau.vercel.app/api/eplay/esportes



const Home = () => {
const { data: onSaleGame, isLoading: isLoadingSale } = useGetOnSaleQuery()
const { data: soonGame, isLoading: isLoadingSoon } = useGetSoonQuery()


    return(
        <>
          <Banner/>
          <ProductsList 
          games={onSaleGame} 
          title='Promoções' 
          background='gray' 
          id="on-sale"
          isLoading={isLoadingSale}
          />
          <ProductsList 
          games={soonGame} 
          title='Em breve' 
          background='black' 
          id="coming-soon"
          isLoading={isLoadingSoon}
          />
          </>
    )
}


export default Home