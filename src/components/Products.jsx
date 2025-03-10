import React, { useContext, useEffect, useState } from 'react'
import RightButton from '../assets/icons/chevron-right'
import GlobalCart from '../assets/icons/Cart'
import GlobalIcon from '../assets/icons/GlobalHeart'
import { CartContext } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { FavoriteContext } from '../contexts/FavoriteContext'

function Products() {
	const [products, setProducts] = useState([])
	const { addToCart } = useContext(CartContext)
	const { addTofavorite } = useContext(FavoriteContext)

	function getProducts() {
		fetch('https://3f019a703d00d18f.mokky.dev/products')
			.then(res => res.json())
			.then(json => setProducts(json))
	}
	const navigate = useNavigate()

	const navigatePage = id => {
		navigate(`/product/${id}`)
	}

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<section className='cards'>
			<div className='container'>
				<div className='cards__wrap'>
					<h1 className='cards__title'>Chegirmalar</h1>
					<a href='' className='cards__link'>
						Hammasini ko`rish
						<RightButton />
					</a>
					<div className='cards__card'>
						{products.map(item => (
							<div key={item.id} className='cards__item'>
								<div className='cards__map'>
									<div
										className='cards__image'
										onClick={() => navigatePage(item.id)}
									>
										<img src={item.image} className='cards__images' />
									</div>

									<p className='cards__text'>{item.text}</p>
									<strile className='cards__old--price'>
										{item.old_price} so`m
									</strile>

									<a className='cards__price'>{item.price} so`m</a>
									<div className='cards__buttonss'>
										<button
											className='cards__buy'
											onClick={() => addToCart(item)}
										>
											<GlobalCart />
											Savatga
										</button>
										<span
											onClick={() => addTofavorite(item)}
											className='cards__icon'
										>
											<GlobalIcon />
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Products
