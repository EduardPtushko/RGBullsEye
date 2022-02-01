import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Line, SliderContainer, RangeNumber } from './ColorSliders.styles'

type SliderProps = {
    lineColor: string
    colorValue: number
    setNewColor: (color: string, value: number) => void
}

const Slider: React.FC<SliderProps> = observer(
    ({ lineColor, colorValue, setNewColor }) => {
        const [value, setValue] = useState(colorValue)
        const [offset, setOffset] = useState(colorValue - 20)

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const rangeWidth = e.target.clientWidth / 100
            const thumbOffset = (parseFloat(e.target.value) * 100) / 255

            setValue(parseFloat(e.target.value))
            setOffset(thumbOffset * rangeWidth)
            setNewColor(lineColor, parseFloat(e.target.value))
        }

        return (
            <SliderContainer>
                <RangeNumber>0</RangeNumber>
                <Line
                    type="range"
                    min={0}
                    max={255}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    lineColor={lineColor}
                    widthOfOffset={offset}
                />
                <RangeNumber>255</RangeNumber>
            </SliderContainer>
        )
    }
)

export default Slider
