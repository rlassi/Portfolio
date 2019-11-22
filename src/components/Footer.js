import React from 'react';

import footerStyles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <a href="https://github.com/rlassi">GitHub</a>
                <br />
                <a href="https://www.linkedin.com/in/ryan-lassiter-63ba64197/">LinkedIn</a>
            </div>
        </div>
    );
};

export default Footer;