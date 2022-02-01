import React, { createContext, useContext } from 'react'
import { Game } from '../model/Game'

type GameContextType = {
    game: Game
}

const GameContext = createContext<GameContextType | null>(null)

export const useGameContext = () => {
    const context = useContext(GameContext)

    if (!context) {
        throw new Error('Game context must be provided')
    }

    return context
}

export const GameProvider: React.FC = ({ children }) => {
    const game = new Game()

    return (
        <GameContext.Provider
            value={{
                game,
            }}
        >
            {children}
        </GameContext.Provider>
    )
}
