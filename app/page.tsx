import BigHeading from '@/components/bigHeading'
import ShapeNav from '@/components/shapeNav'
import { Page } from './enums'
import HtmlComment from '@/components/htmlComment'

export default function Home() {
    const page = Page.Home
    return (
        <div className="overflow-hidden">
            {/* This says TLANNIGAN in ASCII art*/}
            <HtmlComment comment={`  _________  ___       ________  ________   ________   ___  ________  ________  ________       `} />
            <HtmlComment comment={` |\\___   ___\\\\  \\     |\\   __  \\|\\   ___  \\|\\   ___  \\|\\  \\|\\   ____\\|\\   __  \\|\\   ___  \\     `} />
            <HtmlComment comment={` \\|___ \\  \\_\\ \\  \\    \\ \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\\\ \\  \\    `} />
            <HtmlComment comment={`      \\ \\  \\ \\ \\  \\    \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\  __\\ \\   __  \\ \\  \\\\ \\  \\   `} />
            <HtmlComment comment={`       \\ \\  \\ \\ \\  \\____\\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ \\  \\ \\  \\ \\  \\\\ \\  \\  `} />
            <HtmlComment comment={`        \\ \\__\\ \\ \\_______\\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\\\ \\__\\ \\__\\ \\_______\\ \\__\\ \\__\\ \\__\\\\ \\__\\ `} />
            <HtmlComment comment={`         \\|__|  \\|_______|\\|__|\\|__|\\|__| \\|__|\\|__| \\|__|\\|__|\\|_______|\\|__|\\|__|\\|__| \\|__| `} />
            <div className="flex flex-col justify-center min-h-dvh w-min mx-auto">
                <BigHeading />
                <ShapeNav page={page} />
            </div>
        </div>
    )
}
