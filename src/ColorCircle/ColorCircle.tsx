import { observer } from 'mobx-react-lite'
import { Circle } from './ColorCircle.styles'
type ColorCircleProps = {
    bgColor: string
}
const ColorCircle: React.FC<ColorCircleProps> = observer(({ bgColor }) => {
    return <Circle bgColor={bgColor}></Circle>
})

export default ColorCircle
