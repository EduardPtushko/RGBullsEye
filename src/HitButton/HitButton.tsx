import React, { useState } from 'react'
import { Button } from './HitButton.styles'

const HitButton = ({ onClick }: { onClick: () => void }) => {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <Button
            style={{
                opacity: isPressed ? 0.5 : 1,
                boxShadow: isPressed
                    ? 'var(--northWestShadow)'
                    : 'var(--shadow)',
            }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onClick={onClick}
        >
            Hit Me!
        </Button>
    )
}

export default HitButton
