import { makeAutoObservable } from 'mobx'
import { RGB } from './RGB'

export class Game {
    guess = new RGB()
    target = RGB.random()
    round = 1
    scoreRound = 0
    scoreTotal = 0

    constructor() {
        makeAutoObservable(this)
    }

    check(guess: RGB) {
        const difference = Math.round(guess.difference(this.target))
        this.scoreRound = 100 - difference

        if (difference === 0) {
            this.scoreRound += 100
        } else if (difference === 1) {
            this.scoreRound += 50
        }

        this.scoreTotal += this.scoreRound
    }

    startNewRound() {
        this.round += 1
        this.scoreRound = 0
        this.target = RGB.random()
    }

    startNewGame() {
        this.round = 0
        this.scoreTotal = 0
        this.startNewRound()
    }
}
