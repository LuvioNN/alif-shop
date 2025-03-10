import React from 'react'
import AlifIcon from '../assets/icons/AlifIcon'
import MenuIcon from '../assets/icons/MenuIcon'
import SearchIcon from '../assets/icons/SearchIcon'
import LikeIcon from '../assets/icons/LikeIcon'
import SavatIcon from '../assets/icons/SavatIcon'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrap'>
					<div className='header__top'>
						<div className='header__left'>
							<Link to='/' className='header__logo'>
								<AlifIcon />
							</Link>
							<button className='header__catalog'>
								<MenuIcon />
								Tovarlar katalogi
							</button>
						</div>

						<div className='header__search'>
							<input
								className='header__input'
								type='text'
								placeholder='Tovarlarni izlash'
							/>
							{/* <CloseIcon /> */}
							<button className='header__search-icon'>
								<SearchIcon />
							</button>
						</div>
						<Link to='/cart' className='header__button'>
							<SavatIcon />
							Savat
						</Link>
						<Link to='/favorite' className='header__button'>
							<LikeIcon />
							Saralanganlar
						</Link>
						<button className='header__signup'>Kirish</button>

						<select className='header__language'>
							<option value='UZB'>UZB</option>
							<option value='РУС'>РУС</option>
						</select>
					</div>
					<div className='header__bottom'>
						<div className='header__box'>
							<p className='header__subtitle'>Smartfonlar va gadjetlar</p>
							<p className='header__subtitle'>Noutbuklar, kompyuterlar</p>
							<p className='header__subtitle'>TV va proektorlar</p>
							<p className='header__subtitle'>Audiotexnikalar</p>
							<p className='header__subtitle'>Transport</p>
							<p className='header__subtitle'>Uy uchun texnika</p>
							<p className='header__subtitle'>Oshxona uchun texnika</p>
							<p className='header__subtitle'>Go'zallik va sog'liq</p>
						</div>
						<div className='header__box1'>
							<h1 className='header__title'>Yana</h1>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
