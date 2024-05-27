import Navbar from '@/components/navbar'
import { Page } from '../enums'

export default function AboutPage() {
    const page = Page.About
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="xl:container !max-w-screen-md h-full flex flex-col gap-y-8 mx-auto">
                <Navbar page={page} />
            </div>
        </div>
    )
}
