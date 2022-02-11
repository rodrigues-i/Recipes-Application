import React from 'react'

interface Props {
	imgSrc: string;
	pt: string;
}

const CustomImage: React.FC<Props> = ({ imgSrc, pt }) => {
	return (
		<div className='custom-image' style={{ paddingTop: pt }}>
			<img src={imgSrc} alt='' />
		</div>
	)
}

export default CustomImage