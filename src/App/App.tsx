import React, { useState } from 'react'
import HitButton from '../HitButton'
import ColorCircle from '../ColorCircle'
import Text from '../Text'
import ColorSliders from '../ColorSliders'
import { AppContainer } from './App.styles'
import Modal from '../Modal'
import { useGameContext } from '../contexts/game-context'
import { observer } from 'mobx-react-lite'

const App: React.FC = observer(() => {
    const [isOpen, setIsOpen] = useState(false)
    const { game } = useGameContext()

    const handleCloseModal = () => {
        setIsOpen(false)
        game.startNewRound()
    }

    const onHit = () => {
        setIsOpen(true)
        game.check(game.guess)
    }

    return (
        <AppContainer>
            <ColorCircle bgColor={game.target.toRGBString()} />
            <Text
                text={
                    isOpen
                        ? game.target.numberString()
                        : "R: '???' G: '???' B: '???'"
                }
            />
            <ColorCircle bgColor={game.guess.toRGBString()} />
            <Text text={game.guess.numberString()} />
            <ColorSliders />
            <HitButton onClick={onHit} />
            <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                score={game.scoreRound}
            />
        </AppContainer>
    )
})

export default App
