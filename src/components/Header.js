import React from 'react';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

import NavBar from './NavBar';

import down from '../images/down.png';

import headerStyles from '../styles/Header.module.scss';

const Header = (props) => {

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerContainer}>
                <NavBar />
                <div className={headerStyles.headerContainerPitch}>
                    <h1>Hi, my name is Ryan.</h1>
                    <h2>ReactJS | Redux | SCSS</h2>
                    <ul>
                        <li><Link to="/resume">Résumé</Link></li>                 
                        <li><a href="https://www.linkedin.com/in/ryan-lassiter-63ba64197/">LinkedIn</a></li>
                        <li><a href="https://github.com/rlassi">GitHub</a></li>
                    </ul>
                </div>
                <div className={headerStyles.headerContainerPortfolioLink}>
                    <Scrollchor to="portfolio">
                        <img alt="Portfolio" src={down}/>
                    </Scrollchor>
                </div>
            </div> 
        </header>
    );
};

export default Header;