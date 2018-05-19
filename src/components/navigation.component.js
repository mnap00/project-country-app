import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => (
    <div>
        <nav className='navbar navbar-default'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to='/'>Countries.js</Link>
                </div>
                <div className='navbar navbar-expand mr-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-item p-1'>
                            <Link to='/countries'>Countries</Link>
                        </li>
                        <li className='p-1'>
                            <Link to='/continents'>Continents</Link>
                        </li>
                        <li className='p-1'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container-fluid'>
            {props.children}
        </div>
    </div>
);

export default Navigation;
