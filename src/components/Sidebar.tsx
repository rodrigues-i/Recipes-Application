import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface itens {
    name: string;
    path: string;
    icon: IconDefinition;
}

interface Props {
    links: Array<itens>;
    close: () => void;
}

const Sidebar: React.FC<Props> = ({ links, close }) => {
    const location = useLocation();

    return (
        <nav className='sidebar' onClick={() => close()}>
            {links.map((link) => (
                <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'sidebar-link active' : 'sidebar-link'}
                    key={link.name}
                >
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Sidebar;
