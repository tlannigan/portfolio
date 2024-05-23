import { Shape } from '../app/enums'
import Circle from './circle'
import Square from './square'
import Triangle from './triangle'

interface PolygonProps {
    shape: Shape
}

export default function BigPolygon({ shape }: PolygonProps) {
    switch (shape) {
        case Shape.Square:
            return <Square />
        case Shape.Triangle:
            return <Triangle />
        case Shape.Circle:
            return <Circle />
    }
}