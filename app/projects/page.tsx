import Navbar from '@/components/navbar';
import { Page } from '../enums';

export default function ProjectsPage() {
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="flex flex-col justify-between min-h-dvh mx-auto">
                <Navbar page={Page.Projects} />
            </div>
        </div>
    )
}