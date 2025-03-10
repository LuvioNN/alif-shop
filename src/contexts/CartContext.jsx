import { useState, createContext } from 'react'

export const CartContext = createContext(null)
// const [countsOfItems, setCountsOfItems] = useState(null)

function CartProvider({ children }) {
	const [cart, setCart] = useState(
		localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
	)

	const addToCart = data => {
		if (cart.some(item => item.id === data.id)) {
			setLocalCart(
				cart.map(item =>
					item.id === data.id ? { ...item, qty: item.qty + 1 } : item
				)
			)
		} else {
			let obj = { ...data, qty: 1 }
			setCart([...cart, obj])
		}
	}
	const setLocalCart = data => {
		setCart(data)
		localStorage.setItem('cart', JSON.stringify(data))
	}
	const incrementCartItem = data => {
		console.log(data)

		setLocalCart(
			cart.map(item =>
				item.id === data.id ? { ...item, qty: item.qty + 1 } : item
			)
		)
	}
	const decrementCartItem = data => {
		setLocalCart(
			cart.map(item =>
				item.id === data.id ? { ...item, qty: item.qty - 1 } : item
			)
		)
	}
	const deleteCartItem = data => {
		setLocalCart(cart.filter(item => item.id !== data.id && item))
	}

	return (
		<CartContext.Provider
			value={{
				setCart,
				cart,
				addToCart,
				incrementCartItem,
				decrementCartItem,
				deleteCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider
