import styled from '@emotion/styled'
import Image from 'next/image'

interface IObject {
	word: string
	color: string
}

interface IProps {
	title: IObject[]
	subTitle: string
	icon: string
	index: number
	link: string
}

const Card = ({ title, subTitle, icon, link, index }: IProps) => {
	return (
		<Wrapper>
			<Container>
				<ContentContainer>
					{index === 0 && (
						<ImgContainer>
							<Image
								sizes='(max-width: 640px) 90vw, (max-width: 768px) 96vw, (max-width: 1024px) 94vw, 1200px'
								src={'/cardImg.png'}
								fill={true}
								alt='art'
							/>
						</ImgContainer>
					)}
					<TitleContainer>
						<Title>
							{title.map(item => {
								if (item.color === 'main')
									return (
										<span className='main-color' key={item.word}>
											{item.word}
										</span>
									)

								return (
									<span className='second-color' key={item.word}>
										{item.word}
									</span>
								)
							})}
						</Title>
						{index !== 0 && index && (
							<Image width={80} height={80} src={icon} alt='icon' />
						)}
					</TitleContainer>

					<SubTitle>{subTitle}</SubTitle>
				</ContentContainer>
				<Btn>
					<span className='button-text'>Узнать подробнее</span>

					<BtnCircle>
						<Image
							className='button-arrow'
							fill={true}
							src={'/Arrow.svg'}
							alt='arrow'
						/>
					</BtnCircle>
				</Btn>
			</Container>
		</Wrapper>
	)
}

export default Card

const Wrapper = styled.div`
	max-width: 490px;
	border-radius: 30px;
	background-color: #001e3d;
	padding: 30px 30px 16px 30px;
	height: 100%;
	&:first-of-type {
		grid-row: span 2;
	}
	&:not(:first-of-type):nth-of-type(3n + 1) {
		background-color: #fffbe7; /* или любой другой цвет */
		border: 1px solid #eee8e8;
		& .main-color {
			color: #000;
		}
		& h4 {
			color: #000;
		}
		& .button-text {
			color: #000;

			max-width: 104px;
			font-size: 18px;
			font-size: 18px;
		}
	}
	&:nth-of-type(3n + 3) {
		background-color: #fffbe7; /* или любой другой цвет */
		border: 1px solid #eee8e8;
		& .main-color {
			color: #000;
		}
		& h4 {
			color: #000;
		}
		& .button-text {
			font-size: 18px;

			color: #000;
			max-width: 104px;
		}
	}

	@media (max-width: 490px) {
		border-radius: 0;
		max-width: 100vw;
		width: 100%;
		padding: 30px 15px 15px;
	}
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	align-items: end;
	@media (max-width: 768px) {
		gap: 18px;
	}
`
const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h3`
	display: flex;
	flex-direction: column;
	font-size: 30px;
	font-weight: 500;
	line-height: 45px;
	color: #fff;
	& .second-color {
		color: #ffd600;
	}
`
const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 100%;
`
const SubTitle = styled.h4`
	font-weight: 400;
	font-size: 18px;
	line-height: 30px;
	color: #fff;
	white-space: pre;
	@media (max-width: 768px) {
		white-space: normal;
	}
`
const Btn = styled.button`
	border: none;
	max-width: 188px;
	width: 100%;
	max-height: 70px;
	height: 100%;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	border-radius: 30px;
	&:hover {
		opacity: 0.8;
	}

	& .button-text {
		text-align: left;
		font-size: 18px;
		max-width: 104px;
		color: #ffd600;
		display: block;
	}
`
const BtnCircle = styled.span`
	border-radius: 50%;
	position: relative;
	display: block;
	width: 70px;
	height: 70px;
	background-color: #ffd600;
	& .button-arrow {
		width: 40px !important;
		left: 50% !important;
		transform: translate(-50%) !important;
	}
`
const ImgContainer = styled.div`
	position: relative;
	border-radius: 26.3265306px;
	margin-bottom: 20px;
	width: 430px;
	height: 250px;

	& img {
		object-position: left bottom;
		object-fit: cover;
		border-radius: inherit;
	}
	@media (max-width: 678px) {
		width: 100%;
	}
`
