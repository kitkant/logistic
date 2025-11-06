import ResultRecipeData from '@/app/data/ResultRecipeData'
import styled from '@emotion/styled'
import Markdown from 'react-markdown'

const ResultRecipe = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Title>Рецепт результата</Title>
				<SubTitle>Схема нашей работы</SubTitle>
				<CardContainer>
					{ResultRecipeData.map((item, index)=>{

						return (
							<Card key={index}>
								<TitleCard>{item.title}</TitleCard>
								<Markdown
									components={{
										p: ({children}) =>{
											return(
												<TextCard>{children}</TextCard>
											)
										},
										a: ({children}) =>{

											return(
													<LinkCard>{children}</LinkCard>
											)
										}
									}}
								>{item.text}</Markdown>
								<NumberCard>0{index + 1}</NumberCard>
							</Card>
						)
					})}
				</CardContainer>
			</div>
		</Wrapper>
	)
}

export default ResultRecipe

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

	@media(max-width: 768px){
		padding: 0 16px;
	}
	}
`
const Title = styled.h2`
	font-size: 50px;
	line-height: 70px;
	font-weight: 400;
	@media (max-width: 1280px) {
		font-size: 40px;
	}
`
const SubTitle = styled.h3`
	font-size: 20px;
	line-height: 20px;
	font-weight: 400;
	padding-top: 30px;
`
const CardContainer = styled.div`
	display: flex;
	gap: 24px;
	padding-top: 60px;
	@media(max-width: 1600px){
		display: grid;
		grid-template-columns: 362px 362px;
		justify-content: center;
		gap: 20px;
	}
		@media(max-width: 1024px)
	{
		gap: 15px;
	}
	@media(max-width: 820px){
				grid-template-columns: 362px;

	}
	@media(max-width: 780px){
		gap: 15px;
	}
`
const Card = styled.div`
	position: relative;
	width: 100%;
	height: 316px;
	background-color: #001E3D;
	border-radius: 30px;
	padding: 80px 30px 60px 30px;
	white-space: pre;
`
const TitleCard = styled.h3`
		color: #FFD600;
		line-height: 35px;
		font-size: 25px;
		font-weight: 600;
		white-space: break-spaces;
`
const TextCard = styled.p`
	font-size: 18px;
	line-height: 30px;
	font-weight: 400;
	color: #fff;
	padding-top: 20px;
`
const LinkCard = styled.button`
	border: none;
	background-color: transparent;
	font-family: Manrope, Manrope Fallback;
	font-weight: 600;
	font-size: 18px;
	line-height: 30px;
	color: #fff;
	cursor: pointer;
	&:hover{
	opacity: 0.8;
	}
`
const NumberCard = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	color: #FFD600;
	font-weight: 600;
	font-size: 120px;
	line-height: 100px;
`