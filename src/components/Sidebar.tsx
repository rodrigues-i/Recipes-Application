import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
	links: Object[];
	close: () => void;
}

const Sidebar: FC<Props> = ({ links, close }) => {
	return (
		<nav className='sidebar' onClick={() => close()}>
			{ links.map((link) => (
				<a className='sidebar-link' href='#!' key={link.name}>
					<FontAwesomeIcon icon={link.icon} />
					{link.name}
				</a>
				)) }
		</nav>
	)
}

export default Sidebar