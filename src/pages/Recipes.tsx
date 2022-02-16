import React from 'react'
import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'


const Recipes = () => {
	const recipes = [
        {
            title: 'Chicken Pan Pizza',
            image: '/assets/img/gallery/img_1.jpg',
            authorImg: '/assets/img/top-chiefs/img_1.jpg',
        }, 
        {
            title: 'Spaghetti and Meatballs',
            image: '/assets/img/gallery/img_4.jpg',
            authorImg: '/assets/img/top-chiefs/img_2.jpg',
        },
        {
            title: 'American Cheese Burger',
            image: '/assets/img/gallery/img_5.jpg',
            authorImg: '/assets/img/top-chiefs/img_3.jpg',
        },
        {
            title: 'Mutton Biriyani',
            image: '/assets/img/gallery/img_6.jpg',
            authorImg: '/assets/img/top-chiefs/img_5.jpg',
        },
        {
            title: 'Japanese Sushi',
            image: '/assets/img/gallery/img_10.jpg',
            authorImg: '/assets/img/top-chiefs/img_6.jpg',
        },
        {
            title: 'Chicken Pan Pizza',
            image: '/assets/img/gallery/img_1.jpg',
            authorImg: '/assets/img/top-chiefs/img_1.jpg',
        }, 
        {
            title: 'Spaghetti and Meatballs',
            image: '/assets/img/gallery/img_4.jpg',
            authorImg: '/assets/img/top-chiefs/img_2.jpg',
        },
        {
            title: 'American Cheese Burger',
            image: '/assets/img/gallery/img_5.jpg',
            authorImg: '/assets/img/top-chiefs/img_3.jpg',
        },
        {
            title: 'Mutton Biriyani',
            image: '/assets/img/gallery/img_6.jpg',
            authorImg: '/assets/img/top-chiefs/img_5.jpg',
        },
        {
            title: 'Japanese Sushi',
            image: '/assets/img/gallery/img_10.jpg',
            authorImg: '/assets/img/top-chiefs/img_6.jpg',
        },
        {
            title: 'American Cheese Burger',
            image: '/assets/img/gallery/img_5.jpg',
            authorImg: '/assets/img/top-chiefs/img_3.jpg',
        },
        {
            title: 'Mutton Biriyani',
            image: '/assets/img/gallery/img_6.jpg',
            authorImg: '/assets/img/top-chiefs/img_5.jpg',
        }
    ].sort(() => Math.random() - 0.5)
	return (
		<div>
			<PreviousSearches />
			<div className="recipes-container">
				{recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
					))}
			</div>
		</div>
	)
}

export default Recipes