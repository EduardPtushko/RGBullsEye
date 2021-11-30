import styled from 'styled-components'

export const Overlay = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'fixed' : 'none')};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50px;
    background: linear-gradient(rgb(185 156 193 / 72%) 0%, rgb(214 182 182 / 60%) 100%);
`

export const Block = styled.div`
    background-color: #41424acc;
    color: var(--primary-color);
    width: 70%;
    text-align: center;
    border-radius: 5px;

    h4 {
        margin-bottom: 0;
        margin-top: 1.5rem;
    }

    p {
        margin-top: 0.25rem;
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    hr {
        border-color: rgba(182, 186, 214, 0.6);
        margin: 0;
    }

    button {
        border: 0;
        background-color: transparent;
        color: #7bb7ed;
        cursor: pointer;
        font-weight: bold;
        margin: 0.75rem;
        transition: color 0.3s;

        &:hover {
            color: #439ef1;
        }
    }
`
