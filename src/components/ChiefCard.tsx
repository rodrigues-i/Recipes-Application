import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

interface Props {
	chief: Object;
}

const ChiefCard: React.FC<Props> = ({ chief }) => {
	return (
		<div className='chief-card'>
			<img src={chief.img} alt={chief.name} />
			<div className="chief-card-info">
				<h3 className="chief-card-name">{chief.name}</h3>
				<p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
				<p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
				<p className="chief-icons">
					<FontAwesomeIcon icon={faFacebook} />
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faInstagram} />
				</p>
			</div>
		</div>
	)
}

export default ChiefCard