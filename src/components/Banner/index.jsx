import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag/index'
import Button from '../Button'

const Banner = () => (
    <Imagem style={{backgroundImage: `url(${bannerImg})`}}> 
    <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
        <Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
        </Precos>
        </div>
    <Button type='link' to='/produto' title='Clique aqui para aproveitar está oferta'>
        Aproveitar
    </Button>
    </div>
    </Imagem>
)

export default Banner