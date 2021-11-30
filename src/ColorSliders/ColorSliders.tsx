import React from 'react'
import { SlidersWrapper } from './ColorSliders.styles'
import Slider from './Slider'

type ColorSlidersProps = {}

const ColorSliders: React.FC<ColorSlidersProps> = (props) => {
    return (
        <SlidersWrapper>
            <Slider lineColor="red" />
            <Slider lineColor="green" />
            <Slider lineColor="blue" />
        </SlidersWrapper>
    )
}

export default ColorSliders
