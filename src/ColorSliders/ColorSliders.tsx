import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useGameContext } from '../contexts/game-context'
import { SlidersWrapper } from './ColorSliders.styles'
import Slider from './Slider'

type ColorSlidersProps = {}

const ColorSliders: React.FC<ColorSlidersProps> = observer(() => {
    const { game } = useGameContext()
    const { red, green, blue } = game.guess

    const setNewColor = (color: string, value: number) => {
        runInAction(() => {
            game.guess[color] = value
        })
    }

    return (
        <SlidersWrapper>
            <Slider
                lineColor="red"
                colorValue={red}
                setNewColor={setNewColor}
            />
            <Slider
                lineColor="green"
                colorValue={green}
                setNewColor={setNewColor}
            />
            <Slider
                lineColor="blue"
                colorValue={blue}
                setNewColor={setNewColor}
            />
        </SlidersWrapper>
    )
})

export default ColorSliders
