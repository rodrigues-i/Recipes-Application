import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'

interface Props {
	links: Object[];
	close: () => void;
}

const Sidebar: FC<Props> = ({ links, close }) => {
	const location = useLocation()
	
	return (
		<nav className='sidebar' onClick={() => close()}>
			{ links.map((link) => (
				<Link to={link.path} className={location.pathname === link.path ? 'sidebar-link active' : 'sidebar-link'} key={link.name}>
					<FontAwesomeIcon icon={link.icon} />
					{link.name}
				</Link>
				)) }
		</nav>
	)
}

export default Sidebar