import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = props => (
    <div>
        <nav className='navbar navbar-expand navbar-light bg-light'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to='/'>Countries.js</Link>
                </div>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item p-1'>
                        <Link
                            className='nav-link'
                            to='/countries'
                        >
                            Countries
                        </Link>
                    </li>
                    <li className='nav-item p-1'>
                        <Link
                            className='nav-link'
                            to='/continents'
                        >
                            Continents
                        </Link>
                    </li>
                    <li className='nav-item p-1'>
                        <Link
                            className='nav-link'
                            to='/contact'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div className='container-fluid py-5'>
            {props.children}
        </div>
    </div>
);

export default Navigation;
