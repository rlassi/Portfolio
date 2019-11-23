import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BackToFolio from './BackToFolio';

import Hangman from '../apps/Hangman/hangman';
import getPuzzle from '../apps/Hangman/requests';

import rotatePlease from '../images/rotatePlease.png';

import hangmanStyles from '../styles/Hangman.module.scss';

const HangmanApp = () => {

    useEffect(() => {
        let puzzleEl = document.getElementById('puzzle')
        let remainingGuessesMessageEl = document.getElementById('remaining-guesses')
        // statusEl = document.getElementById('status')
        let guessInputEl = document.getElementById('make-guess')
        let gameOne

        guessInputEl.addEventListener('submit', (e) => {
            const guess = e.target.elements.guessInput.value.trim()
            e.preventDefault()
            gameOne.makeGuess(guess)
            render()
            e.target.elements.guessInput.value = ''
            
        })

        const render = () => {
            puzzleEl.innerHTML = ''
            remainingGuessesMessageEl.textContent = gameOne.statusMessage

            gameOne.puzzle.split('').forEach((letter) => {
                const letterEl = document.createElement('span')
                letterEl.textContent = letter
                puzzleEl.appendChild(letterEl)
            })

            // statusEl.textContent = gameOne.status
        }

        const startGame = async () => {
            const puzzle = await getPuzzle('2')
            gameOne = new Hangman(puzzle, 5)
            render()
        }

        document.getElementById('reset').addEventListener('click', startGame)

        startGame()
    })

    return(
        <div className={hangmanStyles.container}>
            <Helmet>
                <title>rkL | Hangman</title>
            </Helmet>
            <div id="puzzle" className={hangmanStyles.puzzle}></div>
            <form id="make-guess">
                <label className={hangmanStyles.typeYourGuess}>
                    <p>Type your guess:</p>
                    <input type="text" name="guessInput" className={hangmanStyles.guessInput} />
                </label>
                <input type="submit" hidden />
            </form>
            <p id="remaining-guesses"></p>
            <button id="reset" className={hangmanStyles.button}>Reset</button>
            <BackToFolio readmeLink="https://github.com/rlassi/Hangman/blob/master/README.md" />
            <div className={hangmanStyles.rotatePleaseContainer}>
                <div className={hangmanStyles.rotatePlease}>
                    <img alt="Rotate Please" src={rotatePlease} />
                    <br /><br />
                    <p>Please rotate device 
                    <br />
                    for optimal experience</p>
                </div>
            </div>
        </div>
    );
};

export default HangmanApp;