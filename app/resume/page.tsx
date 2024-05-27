import Navbar from '@/components/navbar';
import { Page } from '../enums';
import Resume from '@/components/resume';
import ResumeButtons from '@/components/resumeButtons';

export default function ResumePage() {
    const page = Page.Resume
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="xl:container !max-w-screen-md h-full flex flex-col gap-y-8 mx-auto">
                <Navbar page={page} />
                <Resume />
                <ResumeButtons />
            </div>
        </div>
    )
}