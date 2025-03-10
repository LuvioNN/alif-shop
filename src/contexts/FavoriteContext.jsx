import { useState, createContext } from 'react'

export const FavoriteContext = createContext(null)

function FavoriteProvider({ children }) {
	const [favorite, setFavorite] = useState(
		localStorage.getItem('favorite')
			? JSON.parse(localStorage.getItem('favorite'))
			: []
	)

	const addTofavorite = data => {
		if (favorite.some(item => item.id === data.id)) {
			setLocalfavorite(
				favorite.map(item =>
					item.id === data.id ? { ...item, qty: item.qty + 1 } : item
				)
			)
		} else {
			let obj = { ...data, qty: 1 }
			setFavorite([...favorite, obj])
		}
	}
	const setLocalfavorite = data => {
		setFavorite(data)
		localStorage.setItem('favorite', JSON.stringify(data))
	}
	// const incrementfavoriteItem = data => {
	// 	console.log(data)

	// 	setLocalfavorite(
	// 		favorite.map(item =>
	// 			item.id === data.id ? { ...item, qty: item.qty + 1 } : item
	// 		)
	// 	)
	// }
	// const decrementfavoriteItem = data => {
	// 	setLocalfavorite(
	// 		favorite.map(item =>
	// 			item.id === data.id ? { ...item, qty: item.qty - 1 } : item
	// 		)
	// 	)
	// }
	const deletefavoriteItem = data => {
		setLocalfavorite(favorite.filter(item => item.id !== data.id && item))
	}

	return (
		<FavoriteContext.Provider
			value={{
				setFavorite,
				favorite,
				addTofavorite,
				deletefavoriteItem,
			}}
		>
			{children}
		</FavoriteContext.Provider>
	)
}

export default FavoriteProvider
