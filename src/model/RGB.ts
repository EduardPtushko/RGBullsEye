import { makeAutoObservable } from 'mobx'

export class RGB {
    red = 127
    green = 127
    blue = 127

    constructor() {
        makeAutoObservable(this)
    }

    static random() {
        const rgb = new RGB()
        const randomIntegerInRange = (max: number, min: number) =>
            Math.floor(Math.random() * (max - min) + min)

        rgb.red = randomIntegerInRange(0, 255)
        rgb.green = randomIntegerInRange(0, 255)
        rgb.blue = randomIntegerInRange(0, 255)

        return rgb
    }

    difference(target: RGB) {
        const rDiff = this.red - target.red
        const gDiff = this.green - target.green
        const bDiff = this.blue - target.blue

        return Math.sqrt((rDiff * rDiff + gDiff * gDiff + bDiff * bDiff) / 3.0)
    }

    numberString() {
        return `R: ${this.red} G: ${this.green} B: ${this.blue}`
    }

    toRGBString() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }
}
