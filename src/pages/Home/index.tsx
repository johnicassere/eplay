import Banner from "../../components/Banner"
import Game from "../../components/Models/Game"
import ProductsList from "../../components/ProductsList"

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'


const promocoes: Game[] = [
    {
        id: 1,
        category: 'Aventura',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: resident,
    },
    {
        id: 2,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: zelda,
    },
    {
        id: 3,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: diablo,
    },
    {
        id: 4,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: starwars,
    },
]

const emBreve: Game[] = [
    {
        id: 1,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: starwars,
    },
    {
        id: 2,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: starwars,
    },
    {
        id: 3,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: starwars,
    },
    {
        id: 4,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        title: 'Resident',
        system: 'windows',
        infos:['10%', '205,00'],
        image: starwars,
    },
]

const Home = () => (
    <>
      <Banner/>
      <ProductsList games={promocoes} title='Promoçoes' background='gray'/>
      <ProductsList games={emBreve} title='Em breve' background='black'/>
      </>
)

export default Home