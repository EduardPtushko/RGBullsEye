import styled from 'styled-components'

export const SlidersWrapper = styled.div`
    width: 100%;
    margin-top: 0.5rem;
`
export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Line = styled.input<{ lineColor: string }>`
    -webkit-appearance: none;
    margin: 0.75rem 0.5rem;
    width: 280px;
    height: 3px;
    background: rgb(205 201 201 / 48%);
    border-radius: 5px;

    &::-webkit-slider-runnable-track {
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
        box-shadow: var(--shadow);
        transition: background 0.3s ease-in-out;
    }

    /* &::before {
        content: '';
        height: 3px;
        width: 100px;
        background-color: ${(props) => props.lineColor};
        position: absolute;
        top: 0;
    } */
`

// export const Nob = styled.span`
//     width: 1.25rem;
//     height: 1.25rem;
//     border-radius: 50%;
//     background-color: var(--primary-color);
//     position: absolute;
//     top: -8px;
//     box-shadow: var(--shadow);
//     transform: translateX(100px);
// `

export const Number = styled.span`
    font-size: 0.75rem;
`
