
import { Container, SectionTitle, FooterSection, Link, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
    <Container>
    <div className="container">
        <FooterSection>
            <SectionTitle>Categorias</SectionTitle>
            <Links>
                <li><Link to='/categorias#rpg'>RGP</Link></li>
                <li><Link to='/categorias#action'>Ação</Link></li>
                <li><Link to='/categorias#sports'>Esportes</Link></li>
                <li><Link to='/categorias#simulation'>Simulação</Link></li>
                <li><Link to="/categorias#fight">Luta</Link></li>
            </Links>
        </FooterSection>
        <FooterSection>
            <SectionTitle>Acesso rápido</SectionTitle>
            <Links>
            <li><Link to='/#on-sale'>Promoções</Link></li>
            <li><Link to='/#coming-soon'>Em breve</Link></li>
            </Links>
        </FooterSection>
        <p>
            {currentYear} - &copy; E-PLAY todos os doreitos reservados
        </p>

    </div>
    </Container>
)

export default Footer