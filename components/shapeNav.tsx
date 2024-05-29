import { Page, Shape } from '@/app/enums'
import Polygon from './polygon'
import { robotoMono } from '@/app/fonts'

interface ShapeNavProps {
    page: Page
}

export default function ShapeNav({ page }: ShapeNavProps) {
    const pageNavClasses = () =>
        page === Page.Home ? `flex-wrap justify-center sm:justify-between w-full ${robotoMono.className} gap-y-8` : `pr-1`
    return (
        <div className={`flex gap-x-2 ${pageNavClasses()}`}>
            <Polygon shape={Shape.Square} page={page} />
            <Polygon shape={Shape.Triangle} page={page} />
            <Polygon shape={Shape.Circle} page={page} />
        </div>
    )
}
