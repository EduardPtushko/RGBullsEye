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

export const Line = styled.input<{ lineColor: string; widthOfOffset: number }>`
    margin: 0.85rem 0.5rem;
    position: relative;

    /*********** Baseline, reset styles ***********/
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;

    /* Removes default focus */
    &:focus {
        outline: none;
    }

    /******** Chrome, Safari, Opera and Edge Chromium styles ********/
    /* slider track */
    &::-webkit-slider-runnable-track {
        background-color: rgb(205 201 201 / 48%);
        border-radius: 1px;
        height: 3px;
        z-index: 1;
    }

    /* slider thumb */
    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: -9.85px; /* Centers thumb on the track */
        background-color: #fefffe;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        box-shadow: var(--shadow);
        z-index: 1000;
    }

    &:focus::-webkit-slider-thumb {
        outline: 3px solid #fefffe;
        outline-offset: 0.125rem;
    }

    /*********** Firefox styles ***********/
    /* slider track */
    &::-moz-range-track {
        background-color: rgb(205 201 201 / 48%);
        border-radius: 1px;
        height: 3px;
    }

    /* slider thumb */
    &::-moz-range-thumb {
        background-color: #fefffe;
        border: none; /*Removes extra border that FF applies*/
        border-radius: 50%;
        height: 20px;
        width: 20px;
        box-shadow: var(--shadow);
    }

    &:focus::-moz-range-thumb {
        outline: 3px solid #fefffe;
        outline-offset: 0.125rem;
    }

    &::before {
        content: '';
        position: absolute;
        display: block;
        background-color: ${({ lineColor }) => lineColor};
        height: 3px;
        ${({ widthOfOffset }) => `width: calc(${widthOfOffset}px - 1px)`};
    }
`

export const RangeNumber = styled.span`
    font-size: 0.75rem;
    font-weight: bold;
`
