import React from 'react';
import Scrollchor from 'react-scrollchor'

import NavBar from './NavBar';

import down from '../images/down.png';

import headerStyles from '../styles/Header.module.scss';

const Header = (props) => {

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerContainer}>
                <NavBar />
                <div className={headerStyles.headerContainerPitch}>
                    <h1>Hello, my name is Ryan.</h1>
                    <h2>ReactJS | Redux | SCSS</h2>
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