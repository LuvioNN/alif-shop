import React, { useContext } from 'react'
import DeleteIcon from '../assets/icons/DeleteIcon'
import { CartContext } from '../contexts/CartContext'

function CartPage() {
	const { cart, incrementCartItem, decrementCartItem, deleteCartItem } =
		useContext(CartContext)
	const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

	return (
		<div className='cart'>
			<div className='container'>
				<div className='cart__wrapp'>
					<div className='cart__comtent__one'>
						<div className='cart__content'>
							<div className='cart__text'>
								<h1 className='cart__text__one'>Savat</h1>
								<p className='cart__text__two'>{cart.length} tolovlar</p>
							</div>
							<div className='cart__content__one'>
								<button>
									<p className='cart__content__text'>Ulanish</p>
								</button>
								<button>
									<p className='cart__content__text'>
										Tanlanganlarni o'chirish
									</p>
								</button>
								<button>
									<p className='cart__content__text'>Hammasini tanlash</p>
								</button>
							</div>
						</div>
						<div className='cart__line'></div>
						<div className='cart__bottom'>
							<div className='cart__wrap'>
								{cart.map(item => (
									<div key={'id'} className='cart__item'>
										<div className='cart__img__text__one'>
											<img src={item.image} alt='logo' className='cart__img' />
											<div className='savat__text__title'>
												<h4 className='cart__h4'>{item.text}</h4>
												<p className='cart__p'>Narx: {item.price} so'm</p>
												<p className='cart__p'>Sotuvchi: {item.seller}</p>
												<p className='cart__p'>
													Toshkent bo'ylab 1 kundan boshlab. O' zbekiston
													bo'ylab 3 kundan boshlab
												</p>

												<div className='cart__text__subtitl__one'>
													<div className='cart__text__subtitl__two'>
														<button
															onClick={() => decrementCartItem(item)}
															className='cart__right__button'
															disabled={item.qty === 1}
														>
															-
														</button>
														<span className='cart__right__text'>
															{item.qty}
														</span>
														<button
															onClick={() => incrementCartItem(item)}
															className='cart__right__button'
														>
															+
														</button>
													</div>
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
							<div className='cart__right__txt'>
								<div className='cart__right'>
									<div className='cart__right__text'>
										<h4 className='cart__right__one'>
											<p>Tolovlar Narxi: </p>
										</h4>
										<p className='cart__right__two'>Tovarlar soni </p>
										<p className='cart__right__two'>Yetkazib berish</p>
									</div>
									<div className='cart__right__text'>
										<h4 className='cart__right__one'>{totalPrice} som</h4>
										<p className='cart__right__two'>{cart.qty} dona</p>
										<p className='cart__right__two0'>Bepul</p>
									</div>
								</div>
								<div className='cart__right-center'>
									<p className='cart__right-center__one'>
										Bepul yetkazib berish
									</p>
									<p className='cart__right-center__p'>
										Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika
										bo'ylab 3 kungacha
									</p>
								</div>
								<div className='cart__buttons'>
									<button className='cart__button'>
										Muddatli to'lovga olish
									</button>
									<button className='cart__buton'>
										Karta orqali sotib olish
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartPage
