import React from 'react'
import HeroSection from '../components/HeroSection'
import ImproveSkills from '../components/ImproveSkills'
import QuoteSection from '../components/QuoteSection'
import ChiefsSection from '../components/ChiefsSection'

const Home = () => {
	return (
		<>
			<HeroSection />
			<ImproveSkills/>
			<QuoteSection/>
			<ChiefsSection />
		</>
	)
}

export default Home