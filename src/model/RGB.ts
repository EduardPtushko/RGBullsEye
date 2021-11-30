export class RGB {
    constructor(private R: number, private G: number, private B: number) {}

    randomColor() {
        const random = (max: number, min: number) =>
            Math.floor(Math.random() * (max - min) + min)

        return `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`
    }

    rgbString() {
        return `R: ${this.R} G: ${this.G} B: ${this.B}`
    }
}
