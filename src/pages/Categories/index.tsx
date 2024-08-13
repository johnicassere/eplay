import ProductsList from "../../components/ProductsList"
import { 
    useGetActionGameQuery,  
    useGetFightGameQuery, 
    useGetRpgGameQuery, 
    useGetSimulationGameQuery, 
    useGetSportGamesQuery 
} from '../../services/api'



const Categories = () => {
    const { data: actionGames } = useGetActionGameQuery()
    const { data: figthGames} = useGetFightGameQuery()
    const { data: rpgGames } = useGetRpgGameQuery()
    const { data: simulationGames } = useGetSimulationGameQuery()
    const { data: sportGames } = useGetSportGamesQuery()

    if( actionGames && figthGames && rpgGames && simulationGames && sportGames){
        return (
            <>
              <ProductsList games={actionGames} title='Ação' background='black' id="action"/>
              <ProductsList games={sportGames} title='Esportes' background='gray' id="sports"/>
              <ProductsList games={simulationGames} title='Simulação' background='black' id="simulation"/>
              <ProductsList games={figthGames} title='Luta' background='gray' id="fight"/>
              <ProductsList games={rpgGames} title='RPG' background='black' id="rpg"/>
              </>
        )

    }
    return <h4>Carregando...</h4>
}

export default Categories