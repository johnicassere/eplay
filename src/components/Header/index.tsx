import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import * as S from "./srtyles"
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useState } from "react"

const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart )
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    const openCart = () => {
        dispatch(open())
    }
    
    return (
        <S.HeaderBar>
           <S.HeaderRow>
           <div>
                <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </S.Hamburguer>
            <Link to="/">
            <h1>
                <img src={logo} alt="EPLAY" />
            </h1>
            </Link>
            <nav>
                <S.Links>
                    <S.LinkItem>
                        <HashLink title="Clique para acessar categorias" to="/categories">Categorias</HashLink>
                        </S.LinkItem>
                        <S.LinkItem>
                        <HashLink title="Clique para acessar em breve" to="/#coming-soon">Em breve</HashLink>
                        </S.LinkItem>
                        <S.LinkItem>
                        <HashLink title="Clique para acessar promoções" to="/#on-sale">Promoções</HashLink>
                    </S.LinkItem>
                </S.Links>
            </nav>
            </div>
            <S.CartButton role="button" onClick={openCart}>
                {items.length} <span> - produto(s)</span>
                <img src={cartIcon} alt="Carrinho" /> 
            </S.CartButton>
           </S.HeaderRow>

           <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
                <S.Links>
                    <S.LinkItem>
                        <HashLink onClick={() => setIsMenuOpen(false)} title="Clique para acessar categorias" to="/categories">Categorias</HashLink>
                    </S.LinkItem>
                    <S.LinkItem>
                            <HashLink onClick={() => setIsMenuOpen(false)} title="Clique para acessar em breve" to="/#coming-soon">Em breve</HashLink>
                    </S.LinkItem>
                    <S.LinkItem>
                        <HashLink onClick={() => setIsMenuOpen(false)} title="Clique para acessar promoções" to="/#on-sale">Promoções</HashLink>
                    </S.LinkItem>
                </S.Links>
            </S.NavMobile>
        </S.HeaderBar>
    )
}

export default Header