'use-client'
import carouselData from '@/app/data/carouselData'
import useMediaQuery from '@/app/hook/useMediaQuery'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carousel = () => {
	const [swiper, setSwiper] = useState<SwiperType | null>(null)

	const desktop1600 = useMediaQuery(1600)
	const table1000 = useMediaQuery(1000)
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<TitleContainer>
						<Title>Грузоперевозки для бизнеса</Title>
						<SubTitle>четко, выгодно, точно в срок</SubTitle>
					</TitleContainer>
					<TitleCarousel>Выполненные заказы</TitleCarousel>

					<SwiperContainer>
						<Swiper
							className='swiperMain'
							spaceBetween={24}
							slidesPerView={table1000 ? 1 : desktop1600 ? 2 : 3}
							navigation
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							onSwiper={swiper => {
								setSwiper(swiper)
							}}
							// onSlideChange={() => console.log('slide change')}
						>
							{carouselData.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<Card>
											<ImageContainer>
												<Image
													sizes='(max-width: 640px) 100vw, (max-width: 768px) 96vw, (max-width: 1024px) 94vw, 1200px'
													fill={true}
													alt='image card'
													src={item.icon}
												/>
											</ImageContainer>
											<ContentContainer>
												<TitleCard>{item.title}</TitleCard>
												<TouchstoneContainer>
													<Span>
														<span className='touchstone'>Маршрут:</span>{' '}
														{item.route}
													</Span>
													<Span>
														<span className='touchstone'>Тип авто: </span>{' '}
														{item.type}
													</Span>
													<Span>
														<span className='touchstone'>Вес: </span>{' '}
														{item.weight}
													</Span>
												</TouchstoneContainer>
											</ContentContainer>
										</Card>
									</SwiperSlide>
								)
							})}
							<ButtonContainer>
								<BtnNav
									onClick={() => {
										if (swiper) swiper.slidePrev()
									}}
								>
									<Image
										sizes='(max-width: 640px) 100vw, (max-width: 768px) 96vw, (max-width: 1024px) 94vw, 1200px'
										src={'/carousel/Arrow.svg'}
										fill={true}
										alt='btn-prev'
									/>
								</BtnNav>
								<BtnNav
									onClick={() => {
										if (swiper) swiper.slideNext()
									}}
								>
									<Image
										sizes='(max-width: 640px) 100vw, (max-width: 768px) 96vw, (max-width: 1024px) 94vw, 1200px'
										src={'/carousel/Arrow.svg'}
										fill={true}
										alt='btn-prev'
									/>
								</BtnNav>
							</ButtonContainer>
						</Swiper>
					</SwiperContainer>
				</Container>
			</div>
		</Wrapper>
	)
}

export default Carousel

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	margin-top: 170px;
	justify-content: center;
	@media (max-width: 1600px) {
		& .container {
			width: 100%;
			padding: 0 40px;
		}
	}
	@media(max-width: 768px){
		& .container{
			padding: 0 16px;
		}
	}
`
const Title = styled.h2`
	font-size: 50px;
	font-weight: 400;
	line-height: 70px;
	@media(max-width: 1280px){
		font-size: 40px;
	}
`
const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
`
const SubTitle = styled.h3`
	font-size: 30px;
	line-height: 50px;
	font-weight: 400;
		@media(max-width: 768px){
		font-size: 28px;
	}
`
const TitleCarousel = styled.h4`
	font-size: 20px;
	line-height: 30px;
	font-weight: 400;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 37px;
`
const SwiperContainer = styled.div`
	display: flex;
	& .swiperMain {
		padding-bottom: 76px;
	}
	@media (max-width: 1600px) {
		justify-content: center;
		& .swiperMain {
			max-width: 1000px;
		}
	}
	@media(max-width: 1000px){
		& .swiper-wrapper{
			width: 490px;
		}
	}
`
const Card = styled.div`
	width: 490px;
	@media(max-width: 1200px){
		width: clamp(409px, 100%, 490px);
	}
`
const ImageContainer = styled.div`
	width: 100%;
	position: relative;
	height: 250px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	border-radius: 20px;
	& img {
		object-fit: cover;
		border-radius: 20px;
		object-position: 50% 30%;
	}
`
const TitleCard = styled.h5`
	font-size: 25px;
	font-weight: 300;
	line-height: 30px;
	max-width: 283px;
`
const ContentContainer = styled.div`
	padding: 40px 0 30px 30px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`
const TouchstoneContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
const Span = styled.span`
	font-weight: 300;
	font-size: 18px;
	font-family: Manrope, Manrope Fallback;
	& .touchstone {
		color: #8c8a8a;
	}
`
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	position: absolute;
	z-index: 2;
	bottom: 0;
	width: 100%;
	& button:nth-of-type(2) {
		img {
			transform: rotate(180deg);
		}
	}
`
const BtnNav = styled.button`
	position: relative;
	width: 100px;
	height: 10px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	& :hover {
		opacity: 0.8;
	}
`
