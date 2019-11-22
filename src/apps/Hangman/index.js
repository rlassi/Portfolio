import Hangman from './hangman'
import getPuzzle from './requests'

let puzzleEl = document.getElementById('puzzle')
let remainingGuessesMessageEl = document.getElementById('remaining-guesses')
// statusEl = document.getElementById('status')
let gameOne

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    render()
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