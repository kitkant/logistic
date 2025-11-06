import Arrow from '@/app/UI/Icons/Arrow'
import styled from '@emotion/styled'
import Image from 'next/image'

const MainHero = () => {
	return (
		<HeroWrapper>
			<BlurContainer></BlurContainer>
			<TitleWrapper>
				<TitleContainer>
					<Title>Перевезем всё, что нужно</Title>
					<SubTitle>
						от <span>500 кг</span> до тяжелых грузов <span>свыше 20 тонн </span>
						по всей России
					</SubTitle>
					<SubTitleMobile>
						<TextSubTitleGroup className='line60'>
							от <TextYellowBoldBigSize>500 кг</TextYellowBoldBigSize>
						</TextSubTitleGroup>
						<TextSubTitleGroup>до тяжелых грузов</TextSubTitleGroup>
						<TextSubTitleGroup>
							<TextYellowBold> свыше 20 тонн </TextYellowBold>
						</TextSubTitleGroup>
						<TextSubTitleGroup>по всей России</TextSubTitleGroup>
					</SubTitleMobile>
					<ContainerBtn>
						<ContainerOval>
							<ContainerOvalText>
								<span>Рассчитать </span>
								<span>стоимость маршрута</span>
							</ContainerOvalText>
						</ContainerOval>
						<Box></Box>
						<ContainerCircle>
							<Arrow />
						</ContainerCircle>
					</ContainerBtn>
				</TitleContainer>
			</TitleWrapper>
			<ImgContainerMobile>
				<Image src={'/mainhero/truck.png'} fill={true} alt='truck' />
			</ImgContainerMobile>
		</HeroWrapper>
	)
}

export default MainHero

const HeroWrapper = styled.section`
	max-height: 800px;
	height: 100%;
	background-image: url('/mainhero.png');
	background-position: center right;
	background-repeat: no-repeat;
	max-width: 1920px;
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
	@media (max-width: 1280px) {
		background-position: -600px;
	}
	@media (max-width: 960px) {
		background-position: 70%;
	}
	@media (max-width: 768px) {
		background-image: none;
		min-height: 956px;
		background-color: #001e3d;
	}
`
const ImgContainerMobile = styled.div`
	display: none;
	width: 100%;
	height: 100%;
	position: absolute;
	max-height: 446px;
	max-width: 440px;
	right: 0;
	bottom: 0;
	@media (max-width: 768px) {
		display: block;

		& img {
			min-height: 446px;
			bottom: 0;
			max-width: 440px;
		}
	}
`
const BlurContainer = styled.div`
	height: 800px;
	width: 980px;
	position: absolute;
	z-index: 0;
	backdrop-filter: blur(10px);
	left: 0;
	bottom: 0;
	@media (max-width: 1920px) {
		width: 49%;
	}
	@media (max-width: 1024px) {
		width: 500px;
	}
	@media (max-width: 768px) {
		display: none;
	}
`
const TitleWrapper = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	max-width: 1520px;
	padding-top: 190px;
	padding-bottom: 140px;
	height: 100%;
	max-height: 800px;

	@media (max-width: 1600px) {
		padding: 190px 40px 140px 40px;
		max-width: none;
	}
	@media (max-width: 768px) {
		justify-content: center;
		display: flex;
		padding: 148px 0px 0 16px;
	}
	@media (max-width: 440px) {
		justify-content: start;
	}
`
const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	gap: 60px;
	& button {
		align-self: end;
	}
	@media (max-width: 1440px) {
		max-width: 535px;
	}
	@media (max-width: 1280px) {
		max-width: 420px;
	}
	@media (max-width: 768px) {
		gap: 40px;
	}
	@media (max-width: 560px) {
		& button {
			align-self: center;
		}
	}
`
const Title = styled.h1`
	font-weight: 700;
	font-size: 60px;
	line-height: 80px;
	max-width: 508px;
	color: #fff;
	text-transform: uppercase;
	@media (max-width: 1440px) {
		font-size: 56px;
	}
	@media (max-width: 1280px) {
		font-size: 46px;
		max-width: 400px;
	}
	@media (max-width: 768px) {
		font-size: 50px;
		max-width: none;
		text-align: center;
		line-height: 70px;
	}
`
const SubTitle = styled.h2`
	font-weight: 500;
	font-size: 40px;
	color: #fff;
	& span {
		font-weight: 700;
		color: #ffd600;
	}
	& span:last-of-type {
		font-size: 40px;
	}
	& span:first-of-type {
		font-size: 50px;
	}
	@media (max-width: 1440px) {
		font-size: 36px;
		& span:last-of-type {
			font-size: 36px;
		}
		& span:first-of-type {
			font-size: 44px;
		}
	}
	@media (max-width: 1280px) {
		font-size: 28px;
		& span:last-of-type {
			font-size: 28px;
		}
		& span:first-of-type {
			font-size: 32px;
		}
	}
	@media (max-width: 768px) {
		display: none;
	}
`
const SubTitleMobile = styled.h2`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		text-align: center;
		& .line60 {
			line-height: 60px;
		}
	}
`
const ContainerBtn = styled.button`
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	border-radius: 35px;
	cursor: pointer;
	height: 70px;
	max-width: 283px;
	transition: all 0.5s ease;
	font-family: 'Manrope';
	&:hover {
		opacity: 0.8;
	}
`
const ContainerOval = styled.span`
	display: flex;
	border-radius: 35px;
	width: 200px;
	height: 100%;
	align-items: center;
	justify-content: center;
	background-color: #ffd600;
	margin-right: -3.5px;
`
const ContainerOvalText = styled.span`
	display: flex;
	flex-direction: column;
	align-items: start;
	& span:first-of-type {
		font-size: 18px;
	}
	& span:last-of-type {
		font-size: 14px;
	}
`

const ContainerCircle = styled.span`
	display: flex;
	width: 70px;
	height: 70px;
	justify-content: center;
	align-items: center;
	background-color: #001e3d;
	border: 10px solid #ffd600;
	position: relative;
	z-index: 1;
	border-radius: 50%;
	margin-left: -3.5px;
	& svg {
		transform: rotate(60deg);
	}
`
const Box = styled.span`
	width: 20px;
	height: 30px;
	background: #ffd600;
	clip-path: path('M0,0 C7,11 13,11 20,0 L20,30 C13,19 7,19 0,30  Z');
`
const TextSubTitleGroup = styled.span`
	color: #fffbe7;
	font-size: 40px;
	font-weight: 500;
	line-height: 50px;
`
const TextYellowBold = styled.span`
	font-weight: 600;
	color: #ffd600;
`
const TextYellowBoldBigSize = styled.span`
	font-size: 50px;
	color: #ffd600;
	font-weight: 600;
`
