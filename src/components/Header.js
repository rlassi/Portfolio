import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

import NavBar from './NavBar';
import { typewriterApp } from '../apps/typewriter';

import down from '../images/down.png';

import headerStyles from '../styles/Header.module.scss';

const Header = () => {
    useEffect(() => { 
        typewriterApp();
    }, []);

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerContainer}>
                <NavBar />
                <div className={headerStyles.headerContainerPitch}>
                    <h1>Hi, my name is Ryan. <br />
                    I am <span id="typewriter" class={headerStyles.typewriter}></span><span id="cursor">|</span></h1>
                    <h2>ReactJS | JavaScript | Redux | SCSS</h2>
                    <ul>
                        <li><Link to="/resume" target="_blank" rel="noopener noreferrer">Résumé</Link></li>                 
                        <li><a href="https://www.linkedin.com/in/ryan-lassiter-63ba64197/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/rlassi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <div className={headerStyles.headerContainerPortfolioLink}>
                    <Scrollchor to="about">
                        <img alt="about" src={down}/>
                    </Scrollchor>
                </div>
            </div> 
        </header>
    );
};

export default Header;