import styled from '@emotion/styled'

const BannerHero = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<NumberWrapper>
						<NumberContainer>
							<Number>157 945</Number>
							<Text>
								тонн груза
								<br /> доставлено
							</Text>
						</NumberContainer>
						<NumberContainer>
							<Number>31 517</Number>
							<Text>
								выполненных <br />
								заказов
							</Text>
						</NumberContainer>
						<NumberContainer>
							<Number>24/7</Number>
							<Text>
								персональный <br /> менеджер
							</Text>
						</NumberContainer>
					</NumberWrapper>
					<RetentionContainer>
						<RetentionRateContainer>
							<RetentionRateNumber>85</RetentionRateNumber>
							<RetentionRate>%</RetentionRate>
						</RetentionRateContainer>
						<RetentionText>
							Компаний <br />
							обращаются <br />
							с повторными <br />
							заказами
						</RetentionText>
					</RetentionContainer>
				</Container>
			</div>
		</Wrapper>
	)
}

export default BannerHero

const Wrapper = styled.section`
	margin-top: -45px;
	position: relative;
	z-index: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1600px) {
		padding: 0 40px;
	}
	@media (max-width: 768px) {
		margin-top: 0;
		padding: 100px 16px 0 16px;
	}
`
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
	@media (max-width: 1280px) {
		flex-direction: column-reverse;
		align-items: center;
		gap: 60px;
	}
`
const NumberWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(175px, 1fr));
	grid-template-rows: auto;
	column-gap: 6.25rem;
	padding-bottom: 30px;
	@media (max-width: 1440px) {
		column-gap: 50px;
	}
	@media (max-width: 1300px) {
		column-gap: 30px;
	}
	@media (max-width: 1280px) {
		grid-template-rows: auto auto auto;
		grid-template-columns: 1fr;
		row-gap: 70px;
	}
`

const NumberContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media (max-width: 1280px) {
		flex-direction: row;
		align-items: center;
	}
`

const Number = styled.span`
	font-size: 50px;
	line-height: 30px;
	flex: 1;
	text-align: end;
`
const Text = styled.span`
	font-size: 18px;
	font-weight: 300;
	white-space: pre;
	width: 120px;
`
const RetentionContainer = styled.div`
	background-color: #001e3d;
	padding: 40px 60px;
	height: 100%;
	border-radius: 30px;
	display: flex;
	gap: 50px;
	max-width: 620px;
	width: 100%;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 40px 30px;
		gap: 20px;
	}
`
const RetentionRateContainer = styled.div`
	display: flex;
	align-items: start;
`
const RetentionRateNumber = styled.span`
	font-size: 120px;
	font-weight: 800;
	line-height: 120px;
	color: #ffd600;
`
const RetentionRate = styled.span`
	font-size: 80px;
	color: #ffd600;
	margin-top: 8px;
	line-height: 80px;
`
const RetentionText = styled.span`
	font-size: 30px;
	font-weight: 500;
	color: #fff;
	line-height: 45px;
	@media (max-width: 768px) {
		& br {
			display: none;
		}
	}
`
