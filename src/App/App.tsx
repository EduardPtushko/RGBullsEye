import React, { useState } from 'react'
import HitButton from '../HitButton'
import ColorCircle from '../ColorCircle'
import Text from '../Text'
import ColorSliders from '../ColorSliders'
import { AppContainer } from './App.styles'
import Modal from '../Modal'

const App: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AppContainer>
            <ColorCircle />
            <Text r="???" g="???" b="???" />
            <ColorCircle bgColor="brown" />
            <Text r="78" g="108" b="208" />
            <ColorSliders />
            <HitButton />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </AppContainer>
    )
}

export default App
