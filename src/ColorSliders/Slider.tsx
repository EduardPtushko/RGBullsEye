import React, { useState } from 'react'
import { Line, SliderContainer, Number } from './ColorSliders.styles'

type SliderProps = {
    lineColor: string
}

const Slider: React.FC<SliderProps> = ({ lineColor }) => {
    const [value, setValue] = useState('')

    return (
        <SliderContainer>
            <Number>0</Number>
            <Line type="range" min={0} max={255} lineColor={lineColor} />
            <Number>255</Number>
        </SliderContainer>
    )
}

export default Slider
