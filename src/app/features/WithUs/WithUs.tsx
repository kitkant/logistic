import styled from '@emotion/styled'
import { Fragment } from 'react'
import Card from './Card/Card'
import withUsData from '@/app/data/withUsCardData'

const WithUs = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Title>С нами вы получите</Title>
				<CardWrapper>
					{withUsData.map((item, index) => {
						return (
							<Fragment key={index}>
								<Card icon={item.icon} text={item.text} />
							</Fragment>
						)
					})}
				</CardWrapper>
			</div>
		</Wrapper>
	)
}

export default WithUs

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
			padding: 0 16px;
		}
	}
`
const Title = styled.h2`
	font-size: 50px;
	line-height: 70%;
	@media (max-width: 1280px) {
		font-size: 40px;
	}
`
const CardWrapper = styled.div`
	display: grid;
	margin-top: 100px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 24px;
	grid-auto-flow: column;
	& div {
		padding: 20px 5px 26px 20px;
		display: flex;
		gap: 30px;
		max-height: 130px;
		max-width: 362px;
		background-color: #fffbe7;
		border-radius: 30px;
		
	}
	& div:nth-of-type(n + 3):nth-of-type(-n + 5) {
		grid-row: span 2;
		padding: 30px 5px 20px 40px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-height: 284px;
	}

	& div:nth-of-type(2n + 2 ){
		background-color: #001E3D;
		color: #fff;
	}
	& div:not(:nth-of-type(n + 3):nth-of-type(-n + 5)){
	img{
			margin-top: 10px;
		}
	}
	@media(max-width: 1600px){
		justify-content: center;
		grid-template-areas: 
			"fast      some"
			"precision some"
			"escort identity "
			"escort identity ";
		grid-template-columns: 409px 409px;
		grid-template-rows: 1fr 1fr;
		grid-auto-flow: row;
		& div{
			grid-row: 1;
		}
		& div:nth-of-type(1){
			grid-area: fast;
		}
		& div:nth-of-type(2){
			grid-area: precision;
		}
			& div:nth-of-type(3){
			grid-area: some;
		}
			& div:nth-of-type(4){
			grid-area: identity;
		}
			& div:nth-of-type(5){
			grid-area: escort;
			grid-row: unset!important;
			margin-top: -24px;

		}
		& div{
			max-width: 409px;
		}
	}
	@media(max-width: 920px){
		grid-template-areas: 
		"fast"
		"precision"
		"some"
		"identity"
		"escort";
		grid-template-columns: minmax(362px, 409px) ;

	& div:nth-of-type(5){
		
			margin-top: 0;

		}
	}
		& div:nth-of-type(n + 3):nth-of-type(-n + 5){
			min-height: 280px;
		}
	
`
