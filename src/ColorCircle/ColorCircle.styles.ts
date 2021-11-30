import styled from 'styled-components'

export const Circle = styled.div<{ bgColor: string }>`
    border: 15px solid var(--primary-color);
    border-radius: 50%;
    width: 160px;
    height: 160px;
    box-shadow: var(--shadow);
    background-color: ${({ bgColor }) => bgColor};
`
