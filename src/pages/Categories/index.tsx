import ProductsList from "../../components/ProductsList"
import { 
    useGetActionGameQuery,  
    useGetFightGameQuery, 
    useGetRpgGameQuery, 
    useGetSimulationGameQuery, 
    useGetSportGamesQuery 
} from '../../services/api'



const Categories = () => {
    const { data: actionGames, isLoading: isLoadingAction } = useGetActionGameQuery()
    const { data: figthGames, isLoading: isLoadingFight} = useGetFightGameQuery()
    const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGameQuery()
    const { data: simulationGames, isLoading: isLoadingSimulation } = useGetSimulationGameQuery()
    const { data: sportGames, isLoading: isLoadingSports } = useGetSportGamesQuery()

        return (
            <>
              <ProductsList 
              games={actionGames} 
              title='Ação' 
              background='black' 
              id="action"
              isLoading={isLoadingAction}
              />

              <ProductsList 
              games={sportGames} 
              title='Esportes' 
              background='gray' 
              id="sports"
              isLoading={isLoadingSports}
              />

              <ProductsList 
              games={simulationGames} 
              title='Simulação' 
              background='black' 
              id="simulation"
              isLoading={isLoadingSimulation}
              />

              <ProductsList 
              games={figthGames} 
              title='Luta' 
              background='gray' 
              id="fight"
              isLoading={isLoadingFight}
              />

              <ProductsList 
              games={rpgGames} 
              title='RPG' 
              background='black' 
              id="rpg"
              isLoading={isLoadingRpg}
              />
              </>
        )

    }

export default Categories