import React from 'react';
import { Link } from 'react-router-dom';

import todoThumbnail from '../images/TodoApp.png';
import hangmangThumbnail from '../images/HangmanApp.png';
import notesThumbnail from '../images/NotesApp.png';
import indecisionThumbnail from '../images/IndecisionApp.png';
import expensifyThumbnail from '../images/ExpensifyApp.png';

import portfolioStyles from '../styles/Portfolio.module.scss';

const Portfolio = () => {
    return (
        <div className={portfolioStyles.portfolio} id="portfolio">
            <h1>Portfolio</h1>
            <div className={portfolioStyles.container}>
                <div className={portfolioStyles.card}>
                    <a href="https://ryans-expensify-app.herokuapp.com/" target="_blank">
                        <img alt="Expensify App" src={expensifyThumbnail} />
                        <br />
                        Expensify *ReactJS, Firebase*
                    </a>
                </div>  
                <div className={portfolioStyles.card}>
                    <Link to="/Indecision-App">
                        <img alt="Indecision App" src={indecisionThumbnail} />
                        <br />
                        Indecision *React.JS*
                    </Link>
                </div>
                <div className={portfolioStyles.card}>
                    <Link to="/Notes-App/app">
                        <img alt="Notes App" src={notesThumbnail} />
                        <br />
                        Notes *Vanilla JS*
                    </Link>
                </div>              
                <div className={portfolioStyles.card}>
                    <Link to="/Todo-App">
                        <img alt="Todo App" src={todoThumbnail} />
                        <br />
                        Todos *Vanilla JS*
                    </Link>
                </div>
                <div className={portfolioStyles.card}>
                    <Link to="/Hangman-App">
                        <img alt="Hangman App" src={hangmangThumbnail} />
                        <br />
                        Hangman *Vanilla JS*
                    </Link>
                </div>                 
            </div>
        </div>
    )
};

export default Portfolio;