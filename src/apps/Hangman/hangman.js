class Hangman {
    constructor(word = [], remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzleLetters = ''
        const correctGuesses = this.guessedLetters.filter(letter => this.word.includes(letter))

        for (let i = 0; i < this.word.length; i++) {
            if (correctGuesses.includes(this.word[i]) || this.word[i] === ' ') {
                puzzleLetters += this.word[i]
            } else {
                puzzleLetters += '*'
            }
        }

        return puzzleLetters
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Remaining guesses: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try, the word was "${this.word.join('')}"`
        } else {
            return 'Congratulations, you WON!!!'
        }
    }
    calculateStatus() {
        let finished = true

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {

            } else {
                finished = false
            }
        })

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    makeGuess(letter) {
        if (this.status !== 'playing') {
            return
        }

        letter = letter.toLowerCase()

        if (this.guessedLetters.includes(letter)) { // duplicate guess
            return
        } else if (this.word.includes(letter)) { // correct guess
            this.guessedLetters = [...this.guessedLetters, letter]
        } else { // incorrect guess
            this.guessedLetters = [...this.guessedLetters, letter]
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}

export { Hangman as default }