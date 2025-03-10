import React, { useContext } from 'react'
import DeleteIcon from '../assets/icons/DeleteIcon'
import { FavoriteContext } from '../contexts/FavoriteContext'

function Favorite() {
	const { favorite, deleteCartItem } = useContext(FavoriteContext)

	return (
		<section className='favorite'>
			<div className='container'>
				<div className='favorite__wrap'>
					<div className='favorite__title'>
						<h1>Saralanganlar</h1>
					</div>
					<div className='cart__wrap'>
						{favorite.map(item => (
							<div key={'id'} className='cart__item'>
								<div className='cart__img__text__one'>
									<img src={item.image} alt='logo' className='cart__img' />
									<div className='savat__text__title'>
										<h4 className='cart__h4'>{item.text}</h4>
										<p className='cart__p'>Narx: {item.price} so'm</p>
										<p className='cart__p'>Sotuvchi: {item.seller}</p>
										<p className='cart__p'>
											Toshkent bo'ylab 1 kundan boshlab. O' zbekiston bo'ylab 3
											kundan boshlab
										</p>

										<div className='cart__text__subtitl__one'>
											{/* <div className='cart__text__subtitl__two'>
												<button
													onClick={() => decrementCartItem(item)}
													className='cart__right__button'
													disabled={item.qty === 1}
												>
													-
												</button>
												<span className='cart__right__text'>{item.qty}</span>
												<button
													onClick={() => incrementCartItem(item)}
													className='cart__right__button'
												>
													+
												</button>
											</div> */}
											<button
												onClick={() => deleteCartItem(item)}
												className='cart__buttonn'
											>
												<DeleteIcon>Oʻchirish</DeleteIcon>
											</button>
										</div>
										<div className='cart__linee'></div>
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

export default Favorite
