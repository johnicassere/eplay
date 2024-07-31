import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Rotas from './routes'


function App() {
  return (
    <BrowserRouter>
    <GlobalCss/>
      <div className='container'>
        <Header/>
      </div>
    <Rotas/>
    </BrowserRouter>
  )
}

export default App
