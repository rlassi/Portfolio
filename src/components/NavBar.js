import React from 'react';

import Scrollchor from 'react-scrollchor';

import headerStyles from '../styles/Header.module.scss';

const NavBar = (props) => {
    return (
        <div className={headerStyles.headerContainerNavBar}>
            <Scrollchor to="about">About</Scrollchor>
            <Scrollchor to="contact">Contact</Scrollchor>
        </div>
    );  
};

export default NavBar;