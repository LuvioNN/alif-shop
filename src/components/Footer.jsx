import React from 'react'
import yandex from '/public/images/yandex.png'
import Telefon from '/images/Telefon.webp'
import instagram from '/images/instagram.webp'
import facebook from '/images/facebook.png'
import telegram from '/images/telegram.svg'
import ok from '/images/ok.svg'
import tiktok from '/images/tiktok.svg'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__top'>
				<div className='container'>
					<div className='footer__data'>
						<div className='footer__apple'>
							<a href='' className='footer__'>
								<div className='footer__'>
									<img className='footer__' src={Telefon} alt='' />
								</div>
							</a>
						</div>
						<div className='footer__samsung'>
							<h1 className='footer__samsung-gap-one'>
								Ajoyib takliflar har doim yoningizda
							</h1>
							<p className='footer__samsung-gap-two'>
								alif shop ilovasi orqali buyurtma qiling, va qulay takliflar
								haqida hammadan tez biling
							</p>
							<div className='footer__googleplay'>
								<a href='' className='footer__google'>
									<img
										className='footer__play--logo'
										src='https://miro.medium.com/v2/resize:fit:1400/0*HsI5uQ_8Ju9suain.png'
										alt=''
									/>
								</a>
							</div>
							<div className='footer__'>
								<a href='' className='footer__'>
									<img
										className='footer__play--logo'
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/512px-Download_on_the_App_Store_RGB_blk.svg.png'
										alt=''
									/>
								</a>
							</div>
							<div className='footer__'>
								<a href='' className='footer__'>
									<img
										className='footer__play--logo'
										src='https://hellopaisa.co.za/hellopaisa-2021/wp-content/uploads/2021/06/huawei-Badge-Black.png'
										alt=''
									/>
								</a>
							</div>
						</div>
						<div className='footer__nokia'>
							<a href='' className='footer__'>
								<img
									className='footer__'
									src='https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp'
									alt=''
								/>
							</a>
							<p className='footer__nokia-qr-kod'>
								Yuklab olish uchun kamerangizni QR kodga qarating
							</p>
						</div>
					</div>
					<div className='footer__alishop'>
						<div className='footer__alishop-uz'>
							<div className='footer__alishop'>
								<h1 className='footer__alishop-marketplace'>alif shop</h1>
								<p className='footer__alishop-allows'>
									<a href='' className='focus__alishop-that'>
										alifshop.uz
									</a>
									alifshop.uz - xaridorlarga tez va qulay tarzda turli xil
									tovarlarni sotib olish imkoniyatini beradigan marketpleys.
									alifshop.uz saytida smartfon, kompyuter, planshet, televizor,
									aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin.
									Bizning online do'konda elektronika, maishiy texnika,
									avtomobil va maishiy buyumlarning katta tanlovi mavjud.
									<a href='' className='focus__alishop-purchase'>
										alifshop.uz
									</a>
								</p>
								<div className='footer__alishop-immer'>
									<h3 className='footer__alishop-wide'>
										Barchasini ko'rsatish
									</h3>
								</div>
							</div>
							<div className='footer__today'>
								<h1 className='footer__today-high'>
									Smartfonlar muddatli to'lov asosida
								</h1>
								<p className='footer__today-smartphone'>
									Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik
									hayotimizning ajralmas qismiga aylandi. Zamonaviy
									telefonlarning ilovalari va texnik parametrlari tufayli
									smartfonlar ko'pincha bizning kompyuterlarimiz, kameralarimiz,
								</p>
								<div className='footer__alishop-immer'>
									<h3 className='footer__alishop-wide'>
										Barchasini ko'rsatish
									</h3>
								</div>
							</div>
							<div className='footer__give'>
								<h1 className='footer__give-opportunity'>
									Noutbuklar muddatli to'lov asosida
								</h1>
								<p className='footer__give-our'>
									Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli
									bajarish va shu bilan birga bo'sh vaqtimizni unumli o'tkazish
									imkoniyatini beradi. Masalan, noutbuk yordamida tezda
									dunyoning istalgan nuqtasidan, turli xil ishlarni
									bajarishingiz
								</p>
								<div className='footer__alishop-immer'>
									<h3 className='footer__alishop-wide'>Показать все</h3>
								</div>
							</div>
							<div className='footer__addition-electronics'>
								<h1 className='footer__addition-marketplace'>
									Jihozlar muddatli to'lov asosida
								</h1>
								<p className='footer__addition-wide'>
									Bizning online do'konda elektronikadan tashqari, turli xil
									maishiy texnika mavjud: gaz plitalari, grill tayyorlagichlar,
									muzlatgichlar, kir yuvish mashinalari, dazmollar,
									konditsionerlar va boshqa ko'plab almashtirib bo'lmaydigan
									narsalar.
								</p>
								<div className='footer__alishop-immer'>
									<h3 className='footer__alishop-wide'>
										Barchasini ko'rsatish
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='footer__bottom'>
				<div className='container'>
					<section className='all__footer'>
						<div className='all__footer-general'>
							<div className='all__footer-conditions'>
								<div className='all__footer-good'>
									<div className='all__footer-shift'>
										<p className='allfooter-of'>Документы</p>
										<div className='all__ons'>
											<a href='' className='all__className'>
												Общие условия продажи
											</a>
											<a href='' className='all__className'>
												Устав
											</a>
											<a href='' className='all__className'>
												Свидетельство
											</a>
										</div>
									</div>
									<div className='all__data'>
										<p className='all__footer-service'>Сервис</p>
										<div className='all__class'>
											<a href='' className='all__className'>
												Время намаза
											</a>
											<a href='' className='all__className'>
												Рассрочка в Исламе
											</a>
											<a href='' className='all__className'>
												Продавайте на alif shop!
											</a>
											<a href='' className='all__className'>
												Возвраты
											</a>
										</div>
									</div>
									<div className=''>
										<p className='all__footer-smartphones'>Каталог товаров</p>
										<div className='all__name'>
											<a href='' className='all__className'>
												Смартфоны и телефоны
											</a>
											<a href='' className='all__className'>
												Гаджеты
											</a>
											<a href='' className='all__className'>
												Аксессуары для телефонов
											</a>
											<a href='' className='all__className'>
												Часы и аксессуары
											</a>
											<a href='' className='all__className'>
												Cопутствующие товары
											</a>
										</div>
									</div>
									<div className=''>
										<p className='all__footer-main'>Мы в соц-медиа</p>
										<div className='all__olain'>
											<img src={instagram} alt='' className='all__className' />
											<img src={facebook} alt='' className='all__className' />
											<img src={telegram} alt='' className='all__className' />
											<img src={ok} alt='' className='all__className' />
											<img src={tiktok} alt='' className='all__className' />
										</div>
										<div className='all__immer'>
											<p className=''>Справочная служба</p>
											<a href='' className=''>
												@alifshop_uz
											</a>
											<a href='' className=''>
												+998 555 12 12 12
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<div className='footer__under'>
							<p>2025 © alifshop.uz</p>
							<img src={yandex} alt='yandex' />
						</div>
					</section>
				</div>
			</div>
		</footer>
	)
}
