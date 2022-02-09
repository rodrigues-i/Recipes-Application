import React, { useState } from 'react'
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false)

	const links = [{
		name: 'Home',
		path: '/',
		icons: faHome
	},{
		name: 'Recipes',
		path: '/recipes',
		icon: faList
	},{
		name: 'Settings',
		path: '/settings',
		icon: faCog
	}]

	return (
		<>
			<div className='navbar container'>
				<a className='logo' hrf='#!'>F<span>oo</span>diesHub</a>
				<nav className="nav-links">
					{ links.map((link) => {
						return <a href='#!' key={link.name}>{link.name}</a>
					}) }
				</nav>
				<div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-button active' : 'sidebar-button'}>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</div>
		</>
	)
}

export default Navbar