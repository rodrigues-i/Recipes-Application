import React from 'react'
import CustomImage from './CustomImage'

interface Props {
	recipe: Object;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
	return (
		<div className='recipe-card'>
			<CustomImage imgSrc={recipe.image} pt='65%' />
			<div className="recipe-card-info">
				<img  className='author-img' src={recipe.authorImg} />
				<p className="recipe-title">{recipe.title}</p>
				<p className="recipe-description">Lorem ipsum is dummy text of printing and typesetting industry</p>
				<a className='view-btn' href='#!'>VIEW RECIPE</a>
			</div>
		</div>
	)
}

export default RecipeCard