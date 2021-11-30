import React from 'react'
import { TextContainer } from './Text.styles'

type TextProps = {
    r: string
    g: string
    b: string
}

const Text: React.FC<TextProps> = ({ r, g, b }) => {
    return (
        <TextContainer>
            R: {r} G: {g} B: {b}
        </TextContainer>
    )
}

export default Text
