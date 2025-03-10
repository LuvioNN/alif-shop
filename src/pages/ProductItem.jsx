import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, InputNumber, Collapse, Tooltip, Rate } from 'antd'
import {
	HeartOutlined,
	HeartFilled,
	MinusOutlined,
	PlusOutlined,
	LeftOutlined,
	RightOutlined,
	StarOutlined,
} from '@ant-design/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import '/src/style.css'

function ProductItem() {
	const [product, setProduct] = useState([])
	const location = useLocation()
	function getProduct() {
		fetch(
			`https://3f019a703d00d18f.mokky.dev/products/${
				location.pathname.split('/')[2]
			}`
		)
			.then(res => res.json())
			.then(json => setProduct(json))
	}
	useEffect(() => {
		getProduct()
	}, [])
	const [quantity, setQuantity] = useState(1)
	const [liked, setLiked] = useState(false)
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const { Panel } = Collapse

	const handleQuantityChange = value => {
		setQuantity(value)
	}

	const incrementQuantity = () => {
		setQuantity(prev => prev + 1)
	}

	const decrementQuantity = () => {
		setQuantity(prev => (prev > 1 ? prev - 1 : 1))
	}

	const toggleLike = () => {
		setLiked(!liked)
	}

	return (
		<div className='product-container'>
			<div className='product-grid'>
				<div className='gallery-container'>
					<Swiper
						spaceBetween={10}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[Navigation, Thumbs]}
						className='main-swiper'
					>
						<SwiperSlide>
							<img src={product.image} className='main-image' alt='Product' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={product.image2} className='thumbnail' alt='Thumbnail' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={product.image3} className='thumbnail' alt='Thumbnail' />
						</SwiperSlide>

						<div className='swiper-button-prev'>
							<LeftOutlined />
						</div>
						<div className='swiper-button-next'>
							<RightOutlined />
						</div>
					</Swiper>

					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={3}
						watchSlidesProgress={true}
						modules={[Thumbs]}
						className='thumbs-swiper'
					>
						<SwiperSlide>
							<img src={product.image} className='thumbnail' alt='Thumbnail' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={product.image2} className='thumbnail' alt='Thumbnail' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={product.image3} className='thumbnail' alt='Thumbnail' />
						</SwiperSlide>
					</Swiper>
				</div>

				<div className='product-info'>
					<div className='product-header'>
						<h1 className='product-title'>{product.text}</h1>
						<p className='product-description'>{product.about}</p>
						<Rate allowHalf defaultValue={3.5} />
					</div>

					<div className='pricing-section'>
						<div className='price-container'>
							<span className='current-price'>{product.price} som</span>

							<span className='discount-badge'>23% OFF</span>
						</div>
						<div className='installment-info'></div>
					</div>

					<Collapse className='specs-collapse'>
						<Panel header='Xususiyatlari' key='1'>
							<div className='specs-list'>
								<div className='specs-item'>
									<span className='spec-label'>Display</span>
									<span className='spec-value'>6.7-inch OLED</span>
								</div>
								<div className='specs-item'>
									<span className='spec-label'>Camera</span>
									<span className='spec-value'>48MP Main</span>
								</div>
								<div className='specs-item'>
									<span className='spec-label'>Battery</span>
									<span className='spec-value'>4500mAh</span>
								</div>
								<div className='specs-item'>
									<span className='spec-label'>Core</span>
									<span className='spec-value'>14 BIONIC</span>
								</div>
								<div className='specs-item'>
									<span className='spec-label'>Charge</span>
									<span className='spec-value'>Type-C</span>
								</div>
							</div>
						</Panel>
					</Collapse>

					<div className='purchase-section'>
						<div className='quantity-container'>
							<span>Soni</span>
							<div className='quantity-controls'>
								<Button icon={<MinusOutlined />} onClick={decrementQuantity} />
								<InputNumber
									min={1}
									value={quantity}
									onChange={handleQuantityChange}
									className='quantity-input'
								/>
								<Button icon={<PlusOutlined />} onClick={incrementQuantity} />
							</div>
						</div>

						<div className='action-buttons'>
							<Button
								type='primary'
								size='large'
								className='add-to-cart-button'
							>
								Add to Cart
							</Button>
							<Tooltip
								title={liked ? 'Remove from wishlist' : 'Add to wishlist'}
							>
								<Button
									icon={liked ? <HeartFilled /> : <HeartOutlined />}
									onClick={toggleLike}
									size='large'
								/>
							</Tooltip>
						</div>
						<div className='about__seller'>
							<p style={{ color: 'rgb(138, 138, 138)' }}>Sotuvchi</p>
							<div className='seller__text'>
								<p>{product.seller}</p>
								<span
									style={{
										background: 'rgb(240, 240, 240)',
										'border-radius': '4px',
									}}
								>
									<StarOutlined
										style={{ color: 'orange', 'margin-left': '5px' }}
									/>
									{product.stars}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
