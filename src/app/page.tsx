'use client'
import styled from '@emotion/styled'
import Header from './features/Header/Header'
import MainHero from './features/MainHero/MainHero'
import BannerHero from './features/BannerHero/BannerHero'
import Implementation from './features/Implementation/Implementation'
import WithUs from './features/WithUs/WithUs'
import ProvideServices from './features/ProvideServices/ProvideServices'
import CardInfo from './features/CardInfo/CardInfo'
import ResultRecipe from './features/ResultRecipe/ResultRecipe'
import WhyStay from './features/WhyStay/WhyStay'
import Footer from './features/Footer/Footer'
import Carousel from './features/Carousel/Carousel'
import FormFraternalBond from './features/FormFraternalBond/FormFraternalBond'

export default function Main() {
	return (
		<>
			<Header />
			<MainContent>
				<MainHero />
				<BannerHero/>
				<Implementation/>
				<WithUs/>
				<ProvideServices/>
				<CardInfo/>
				<Carousel/>
				<ResultRecipe/>
				<WhyStay/>
				<FormFraternalBond/>
			</MainContent>
			<Footer/>
		</>
	)
}

const MainContent = styled.main`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
