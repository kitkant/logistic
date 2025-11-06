'use client'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<HeaderWrapper>
			<div className='container'>
				<HeaderContainer>
					<LogoContainer>
						<Image src={'/Logo_Logis.svg'} width={100} height={60} alt='logo' />
						<LogoTitle>Logistic</LogoTitle>
					</LogoContainer>
					<NavigationContainer>
						<ContactContainer>
							<Link href={'tel:+70000000777'}>+7 000 000 07 77</Link>
							<ContactBtn>Заявка на перевозку груза</ContactBtn>
						</ContactContainer>
						<SocialContainer>
							<SocialBtnContainer>
								{' '}
								<Image
									src={'/Telegram.svg'}
									width={25}
									height={25}
									alt='social'
								/>
							</SocialBtnContainer>
							<SocialBtnContainer>
								{' '}
								<Image
									src={'/WhatsApp.svg'}
									width={25}
									height={25}
									alt='social'
								/>
							</SocialBtnContainer>
						</SocialContainer>
					</NavigationContainer>
				</HeaderContainer>
			</div>
		</HeaderWrapper>
	)
}

export default Header

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
const HeaderWrapper = styled.header`
	background-color: #fffbe7;
	position: absolute;
	top: 0;
	z-index: 2;
	max-height: 100px;
	height: 100%;
	width: 100%;
	border-bottom-left-radius: 24px;
	border-bottom-right-radius: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1920px;
	@media (max-width: 1600px) {
		padding: 0 40px 0 40px;
	}
	@media (max-width: 1024px) {
		max-height: 80px;
	}
	@media (max-width: 768px){
		padding: 0 16px;
	}
	@media (max-width: 576px) {
		max-height: 60px;
	}
`
const LogoContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	@media (max-width: 1024px) {
		& img {
			width: 80px;
		}
	}
	@media (max-width: 576px) {
		& img {
			width: 50px;
			height: 30px;
		}
	}
`
const LogoTitle = styled.span`
	display: flex;
	flex-direction: column;
	font-size: 36px;
	font-weight: 600;
	@media (max-width: 1024px) {
    font-size: 32px;
  }
			@media (max-width: 576px) {
			font-size: 16px;
		}
  }
`
const NavigationContainer = styled.div`
	display: flex;
	gap: 40px;
`
const SocialContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	justify-content: center;
	@media (max-width: 1024px) {
		display: none;
	}
`
const SocialBtnContainer = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	max-width: 25px;
	max-height: 25px;
	&:hover {
		opacity: 0.8;
	}
`
const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	a {
		color: #000;
		text-decoration: none;
		font-weight: 500;
		font-size: 30px;
		&:hover {
			opacity: 0.8;
		}
	}
	@media (max-width: 1024px) {
		justify-content: center;
	}
	@media (max-width: 576px) {
		& a {
			font-size: 20px;
		}
	}
`
const ContactBtn = styled.button`
	border: none;
	background-color: transparent;
	text-decoration: underline;
	font-family: 'Manrope';
	font-size: 18px;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
	@media (max-width: 1024px) {
		display: none;
	}
`
