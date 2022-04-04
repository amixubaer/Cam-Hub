import React from 'react';
import './Navbar.css';
import Link from '../Link/Link';
const Navbar = () => {
    const routes = [
        {
            id: 1, name:'Home', link: '/home'
        },
        {
            id: 2, name:'Reviews', link: '/reviews'
        },
        {
            id: 3, name:'Dashboard', link: '/dashboard'
        },
        {
            id: 4, name:'Blog', link: '/blog'
        },
        {
            id: 5, name:'About', link: '/about'
        },

    ]
    return (
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 mx-auto'>
            <ul className='md:flex flex-wrap justify-between items-center mx-auto'>
                {
                    routes.map(route => <Link
                        key={route.id} 
                        route={route} className=''>

                        </Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;