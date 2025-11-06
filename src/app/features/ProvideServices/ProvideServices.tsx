import provideServicesData from '@/app/data/provideServicesData'
import styled from '@emotion/styled'
import Image from 'next/image'

const ProvideServices = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<Title>
						<span>Предоставляем</span>
						<span>полный </span>
						<span>комплекс</span>
						<span>услуг</span>
					</Title>
					<ServicesContainer>
						{provideServicesData.map((item, index) => {
							return (
								<IconContainer key={index}>
									<Image width={60} height={60} src={item.icon} alt='icon' />
									<Text>{item.text}</Text>
								</IconContainer>
							)
						})}
					</ServicesContainer>
				</Container>
			</div>
		</Wrapper>
	)
}

export default ProvideServices

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	margin-top: 170px;
	justify-content: center;
	@media (max-width: 1600px) {
		padding: 0 40px;
		& .container {
			max-width: 100%;
		}
	}
	@media(max-width: 768px){
		padding: 0;
		
	}
`
const Container = styled.div`
	width: 100%;
	height: 900px;
	background-image: url('/track.png');
	background-position: bottom left;
	border-radius: 30px;
	padding: 90px 100px 54px 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media(max-width: 1600px){
		background-position: bottom center;
		padding: 60px 50px 54px 60px;
	}
	@media(max-width: 1024px){
		height: auto;
		background-repeat: no-repeat;
		padding-bottom: 20px;
	}
	@media(max-width: 768px){
		background-image: none;
		background-color: #001E3D;
		border-radius: 0;
		padding-left: 16px;
		padding-top: 50px;
	}
}

`
const Title = styled.h2`
	display: flex;
	flex-direction: column;

	& span {
		color: #ffd600;
		font-weight: 600;
		font-size: 80px;
		line-height: 90px;
	}
	& span:nth-of-type(1) {
		color: #fff;
		font-size: 50px;
		font-weight: 400;
		line-height: 70px;
	}
	@media (max-width: 1280px) {
		& span {
			font-size: 60px;
			line-height: 70px;
		}
		& span:nth-of-type(1) {
			font-size: 40px;
			line-height: 60px;

		}
	}
`
const ServicesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 60px 20px 60px;
	border-radius: 30px;
	backdrop-filter: blur(10px);
	@media (max-width: 1280px) {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		max-width: 600px;
		align-self: end;
		margin-top: -150px;
		gap: 0px 20px;
		padding: 20px 0px 20px 60px;
	}
	@media(max-width: 1024px){
		margin-top: 0;
	}
	@media(max-width: 768px){
		padding-top: 70px;
		padding-left: 30px;
		padding-bottom: 34px;
		gap: 60px 50px;

	}
`
const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 35px;
`
const Text = styled.h4`
	white-space: pre;
	color: #fff;
	line-height: 30px;
	font-size: 18px;
	font-weight: 400;
`
