import React from 'react'
import CustomImage from './CustomImage'

const HeroSection = () => {
	const images = [
		'src//img/gallery/img_1.jpg',
		'src/img/gallery/img_2.jpg',
		'src/img/gallery/img_3.jpg',
		'src/img/gallery/img_4.jpg',
		'src/img/gallery/img_5.jpg',
		'src/img/gallery/img_6.jpg',
		'src/img/gallery/img_7.jpg',
		'src/img/gallery/img_8.jpg',
		'src/img/gallery/img_9.jpg'
	]


	return (
		<div className='section hero'>
			<div className='col typography'>
				<h1 className="title">What Are We About</h1>
				<p className="info">
					FoodiesHub is a place where you can please your soul  and tummy with delicius food recipes of all cusine. And our service is absolutely free. So start exploring now
				</p>
				<button className="btn">explore now</button>
			</div>
			<div className='col gallery'>
				{ images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={'90%'} />
					)) }
			</div>
		</div>
	)
}

export default HeroSection