import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import CartProvider, { CartContext } from './contexts/CartContext.jsx'
import FavoriteProvider, {
	FavoriteContext,
} from './contexts/FavoriteContext.jsx'

createRoot(document.getElementById('root')).render(
	<FavoriteProvider>
		<CartProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CartProvider>
	</FavoriteProvider>
)
