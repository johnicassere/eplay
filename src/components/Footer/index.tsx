
import { Container, SectionTitle, FooterSection, Link, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
    <Container>
    <div className="container">
        <FooterSection>
            <SectionTitle>Categorias</SectionTitle>
            <Links>
                <li>
                    <Link title='Clique para acessar jogos de RPG' to='/categorias#rpg'>RGP</Link>
                </li>
                <li>
                    <Link title='Clique para acessar jogos de Ação' to='/categorias#action'>Ação</Link>
                </li>
                <li>
                    <Link title='Clique para acessar jogos de Esportes' to='/categorias#sports'>Esportes</Link>
                </li>
                <li>
                    <Link title='Clique para acessar jogos de Simulação' to='/categorias#simulation'>Simulação</Link>
                </li>
                <li>
                    <Link title='Clique para acessar jogos de Luta' to="/categorias#fight">Luta</Link>
                </li>
            </Links>
        </FooterSection>
        <FooterSection>
            <SectionTitle>Acesso rápido</SectionTitle>
            <Links>
            <li><Link title='Clique para acessar a seção de promoções' to='/#on-sale'>Promoções</Link></li>
            <li><Link title='Clique para acessar a seção em breve' to='/#coming-soon'>Em breve</Link></li>
            </Links>
        </FooterSection>
        <p>
            {currentYear} - &copy; E-PLAY todos os doreitos reservados
        </p>

    </div>
    </Container>
)

export default Footer