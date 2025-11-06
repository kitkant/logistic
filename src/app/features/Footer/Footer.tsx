import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<Wrapper>
			<div className='container'>
				<TextContainer>
					<CompanyTextContainer>
						<span>© ООО &quot;Logistic&quot;. Все права защищены, 2025г.</span>
						<Link href={'#'}>Политика обработки персональных данных</Link>
					</CompanyTextContainer>
					<ContactContainer>
						<Link href={'tel:+70000000777'}>+ 7 000 134 00 00</Link>
						<MessengerContactContainer>
							<Link href={'#'}>
								<Image
									src='/TelegramLight.svg'
									width={25}
									height={25}
									alt='icon'
								/>
							</Link>
							<Link href={'#'}>
								<Image
									src='/WhatsAppLight.svg'
									width={25}
									height={25}
									alt='icon'
								/>
							</Link>
						</MessengerContactContainer>
					</ContactContainer>
				</TextContainer>
				<Line />
			</div>
		</Wrapper>
	)
}

export default Footer

const Wrapper = styled.footer`
	width: 100%;
	background-color: #000;
	margin-top: 100px;
	padding: 30px; 0 40px 0;
	display: flex;
	flex-direction: column;
 
	align-items: center;
`
const TextContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media(max-width: 768px){
		flex-direction: column-reverse;
	}
`
const CompanyTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 26px;
	& span{
		font-weight: 300;
		font-size: 16px;
		font-family: Manrope;
		line-height: 30px;
		color: #fff;
	}
		& a{
		width: fit-content;
		color: #18A0FB;
		font-size: 14px;
		font-weight: 300;
		}
	
	}
`
const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
	& a {
		color: #fff;
		text-decoration: none;
		font-weight: 300;
		font-size: 25px;
	}
	@media(max-width: 768px){
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
`
const MessengerContactContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: end;
	& a {
		max-height: 25px;
	}
`
const Line = styled.div`
	width: 100%;
	height: 2px;
	background-color: #5b5b5b;
	margin-top: 27px;
`
