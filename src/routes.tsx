import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'


const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/categorias" element={<Categories/>} />
    <Route path="/product" element={<Product/>} />
    {/* <Route path="/novidade" element={<Categories/>} />
    <Route path="/promocoes" element={<Categories/>} /> */}
  </Routes>
)

export default Rotas