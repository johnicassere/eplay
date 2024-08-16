import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
    return (
        <Container>
            <PacmanLoader color={colors.white} />
        </Container>
    )
}


export default Loader