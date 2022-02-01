import React from 'react'
import { Block, Overlay } from './Modal.styles'

type ModalProps = {
    onClose: () => void
    isOpen: boolean
    score: number
}

const Modal: React.FC<ModalProps> = ({ onClose, isOpen, score }) => {
    return (
        <>
            <Overlay isOpen={isOpen}>
                <Block>
                    <h4>Your Score</h4>
                    <p>{score}</p>
                    <hr />
                    <button onClick={onClose}>OK</button>
                </Block>
            </Overlay>
        </>
    )
}

export default Modal
