import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import ProductItem from './pages/ProductItem'
import Favorite from './pages/Favorite'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/favorite' element={<Favorite />} />
				<Route path='/product/:id' element={<ProductItem />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
