import React from 'react'
import { observer } from 'mobx-react-lite'
import { TextContainer } from './Text.styles'

type TextProps = {
    text: string
}

const Text: React.FC<TextProps> = observer(({ text }) => {
    return <TextContainer>{text}</TextContainer>
})

export default Text
