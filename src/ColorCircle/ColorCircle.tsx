import { Circle } from './ColorCircle.styles'
type ColorCircleProps = {
    bgColor?: string
}
const ColorCircle: React.FC<ColorCircleProps> = ({ bgColor = 'green' }) => {
    return <Circle bgColor={bgColor}></Circle>
}

export default ColorCircle
