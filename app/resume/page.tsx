import Navbar from '@/components/navbar';
import { Page } from '../enums';

export default function ResumePage() {
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="flex flex-col justify-between min-h-dvh mx-auto">
                <Navbar page={Page.Resume} />
            </div>
        </div>
    )
}