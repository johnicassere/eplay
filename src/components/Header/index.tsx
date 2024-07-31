import { Link } from "react-router-dom"
import { HeaderBar, Links, LinkItem, LinkCart } from "./srtyles"
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
    <HeaderBar>
        <div>
        <img src={logo} alt="EPLAY" />
        <nav>
            <Links>
                <LinkItem>
                <Link to="/categorias">Categorias</Link>
                </LinkItem>
                <LinkItem>
                <Link to="/categorias">Noividades</Link>
                </LinkItem>
                <LinkItem>
                <Link to="/categorias">Promoçoes</Link>
                </LinkItem>
            </Links>
        </nav>
        </div>
        <LinkCart href="#">
            0 - produto(s)
            <img src={carrinho} alt="Carrinho" /> 
        </LinkCart>
    </HeaderBar>
)

export default Header