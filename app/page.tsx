import BigHeading from '@/components/bigHeading'
import ShapeNav from '@/components/shapeNav'
import { Page } from './enums'

export default function Home() {
    const page = Page.Home
    return (
        <div className="overflow-hidden">
            <div className="flex flex-col justify-center min-h-dvh w-min mx-auto">
                <BigHeading />
                <ShapeNav page={page} />
            </div>
        </div>
    )
}
