import cardInfoData from '@/app/data/cardInfoData'
import styled from '@emotion/styled'
import Image from 'next/image'
import Markdown from 'react-markdown'

const CardInfo = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					{cardInfoData.map((item, index) => {
						return (
							<Card key={index}>
								<Title>
									<Markdown
										components={{
											p: ({ children, ...props }) => (
												<span style={{ display: 'block' }} {...props}>
													{children}
												</span>
											),
										}}
									>
										{item.title}
									</Markdown>
								</Title>
								<Markdown
									components={{
										p: ({ children }) => <Text>{children}</Text>,
									}}
								>
									{item.text}
								</Markdown>
								<CircleContainer>
									<Image
										src={'/Icons/arrowYellow.svg'}
										fill={true}
										alt='icon'
									/>
								</CircleContainer>
								<Line className='line'></Line>
							</Card>
						)
					})}
				</Container>
			</div>
		</Wrapper>
	)
}

export default CardInfo

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	margin-top: 170px;
	justify-content: center;
	@media (max-width: 1600px) {
		& .container {
			max-width: 100%;
		}
	}
`
const Container = styled.div`
	display: flex;
	gap: 25px;
	@media (max-width: 1600px) {
		padding: 0 40px;
		display: grid;
		grid-template-columns: minmax(409px, 490px) minmax(409px, 490px);
		grid-template-rows: 1fr 1fr;
		justify-content: center;
	}
	@media (max-width: 1020px) {
		grid-template-columns: minmax(409px, 490px);
		grid-template-rows: minmax(460px, 480px) minmax(460px, 480px) minmax(460px, 480px);
		
	}
`
const Card = styled.div`
	height: 460px
	width: 100%;
	background-color: #ffd600;
	border-radius: 30px;
	padding: 40px 30px 50px 40px;
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 40px;
	z-index: 1;
	&:not(:nth-of-type(2)) {
		.line {
			display: none;
		}
	}
	@media(max-width: 1020px){
		padding: 40px 20px 40px 40px;
	}
`
const Title = styled.h3`
	white-space: pre;
	font-size: 30px;
	font-weight: 400;
`
const CircleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: #001e3d;
	width: 60px;
	height: 60px;
	position: absolute;
	z-index: 1;
	top: 10px;
	right: 10px;
	& img {
		object-fit: none;
	}
`
const Text = styled.p`
	line-height: 35px;
	font-size: 18px;
	white-space: pre;
	@media (max-width: 1280px) {
		white-space: normal;
	}
`
const Line = styled.div`
	width: 60px;
	height: 1px;
	background-color: #000;
	display: block;
	position: absolute;
	top: 63px;
	left: 40%;
	z-index: 1;
	@media(max-width: 570px){
		left: calc(45% - 10px);
	}
`
