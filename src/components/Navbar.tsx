import React, { useState } from 'react';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface itens {
    name: string;
    path: string;
    icon: IconDefinition;
}

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();

    const links: Array<itens> = [
        {
            name: 'Home',
            path: '/',
            icon: faHome,
        },
        {
            name: 'Recipes',
            path: '/recipes',
            icon: faList,
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: faCog,
        },
    ];

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        <>
            <div className='navbar container'>
                <Link to='/' className='logo'>
                    F<span>oo</span>diesHub
                </Link>
                <nav className='nav-links'>
                    {links.map((link) => {
                        return (
                            <Link
                                className={location.pathname === link.path ? 'active' : ''}
                                to={link.path}
                                key={link.name}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
                <div
                    onClick={() => setShowSidebar(!showSidebar)}
                    className={showSidebar ? 'sidebar-button active' : 'sidebar-button'}
                >
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    );
};

export default Navbar;
