import React from 'react';
import { HashLink } from 'react-router-hash-link';

import backStyles from '../styles/BackToFolio.module.scss';

const BackToFolio = (props) => {
    return (
        <div className={backStyles.backContainer}>
            <div id={backStyles.backFloat}>
                <div><a href={props.readmeLink}>readme</a></div>
                <div><HashLink to="/#portfolio">portfolio</HashLink></div>
            </div>            
        </div>
    );
};

export default BackToFolio;