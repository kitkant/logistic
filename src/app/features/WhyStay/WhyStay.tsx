import whyStandData from '@/app/data/whyStandData'
import styled from '@emotion/styled'
import Image from 'next/image'

const WhyStay = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<Title>Почему клиенты остаются с нами?</Title>
					<GridContainer>
						{whyStandData.map((item, index) => {
							return (
								<Card key={index}>
									<Image src={item.icon} width={70} height={70} alt='icon' />
									<CardTextContainer>
										<CardTitle>{item.title}</CardTitle>
										<CardText>{item.text}</CardText>
									</CardTextContainer>
								</Card>
							)
						})}
					</GridContainer>
				</Container>
			</div>
		</Wrapper>
	)
}

export default WhyStay

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	margin-top: 170px;
	justify-content: center;
	@media(max-width: 1600px){
		& .container{
			max-width: 100%;
		 padding: 0 40px;
		}
	}
	@media(max-width: 768px){
	& .container{
			max-width: 100%;
		 		padding: 0 16px;

		}
	}
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1413px;
`
const Title = styled.h2`
	font-weight: 400;
	font-size: 50px;
	line-height: 70px;
	@media(max-width: 1280px){
		font-size: 40px;
	}
`
const GridContainer = styled.div`
	display: grid;
	padding-top: 60px;
	grid-template-columns: repeat(3, minmax(200px, 374px));
	justify-content: space-between;
	row-gap: 60px;
	@media(max-width: 1280px){
	grid-template-columns: repeat(2, minmax(200px, 374px));
	justify-content: center;
	}
	@media(max-width: 768px){
	grid-template-columns: minmax(200px, 374px);
	
	}
`
const Card = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`
const CardTitle = styled.h3`
	font-weight: 500;
	font-size: 25px;
	line-height: 35px;
`
const CardText = styled.p`
	font-weight: 300;
	font=size: 18px;
	line-height: 35px;
	max-width: 333px;
`
const CardTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
