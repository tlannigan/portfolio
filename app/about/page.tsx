import Navbar from '@/components/navbar'
import { Page } from '../enums'

export default function AboutPage() {
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="xl:container !max-w-screen-md flex flex-col gap-y-8 min-h-dvh mx-auto">
                <Navbar page={Page.About} />
            </div>
        </div>
    )
}
