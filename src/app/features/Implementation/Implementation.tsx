import implementationData from '@/app/data/cardImplementationData'
import styled from '@emotion/styled'
import Card from './components/Card/Card'

const Implementation = () => {
	return (
		<Wrapper>
			<div className='container'>
				<TitleContainer>
					<Title>Мы осуществляем</Title>
					<SubTitle>следующие виды перевозок</SubTitle>
				</TitleContainer>
				<GridContainer>
					{implementationData.map((item, index) => {
						return (
							<Card
								title={item.title}
								subTitle={item.subTitle}
								icon={item.icon}
								link={item.link}
								index={index}
								key={index}
							/>
						)
					})}
				</GridContainer>
			</div>
		</Wrapper>
	)
}

export default Implementation

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	margin-top: 170px;
	justify-content: center;
	@media(max-width: 1600px){
		& .container{
			max-width: 100%;
		}
	}
`
const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 1600px) {
		padding: 0 40px;
	}
`
const Title = styled.h2`
	font-size: 50px;
	line-heigh: 35px;
	font-weight: 400;
	@media (max-width: 1280px) {
		font-size: 40px;
	}
`
const SubTitle = styled.h3`
	font-size: 20px;
	line-height: 40px;
	font-weight: 400;
`
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 344px 380px;
	padding-top: 80px;
	gap: 25px;
	@media (max-width: 1600px) {
		grid-template-columns: 1fr 1fr;
		max-width: 1000px;
		justify-self: center;
	}
	@media (max-width: 1020px) {
		grid-template-columns: 1fr;
	}
	@media (max-width: 768px) {
		padding-top: 50px;
		width: 100%;
		justify-items: center;
	}
`
