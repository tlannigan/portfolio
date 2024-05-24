import Navbar from '@/components/navbar';
import { Page } from '../enums';
import Project from '@/components/project';
import ordr from '@/public/ordr.png'
import digYourselfOut from '@/public/digyourselfout.png'
import apollo from '@/public/apollo.jpg'

export default function ProjectsPage() {
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="xl:container !max-w-screen-md flex flex-col gap-y-8 min-h-dvh mx-auto">
                <Navbar page={Page.Projects} />
                <div className='flex flex-col mt-8'>
                    <Project
                        src={ordr}
                        name="Ordr Android App"
                        description="Food delivery app for sports stadiums, with integrated delivery service and third-party point-of-sale and inventory integrations."
                        siteUrl='https://play.google.com/store/apps/details?id=com.ordr.app' />
                    <Project
                        src={digYourselfOut}
                        name='Dig Yourself Out'
                        description='Log parsing tool for modded Minecraft. Finds common issues in log files and displays them for users.'
                        siteUrl='https://digyourselfout.app'
                        sourceUrl='https://github.com/tlannigan/dig-yourself-out' />
                    <Project
                        src={apollo}
                        name='Apollo Overwolf App'
                        description='Gaming app centered around providing new and unique audio experiences in games that don&apos;t already provide them, enhancing player experiences. Learns user preferences over time to recommend the best music in the moment.'
                        siteUrl='https://www.overwolf.com/app/players_republik-apollo' />
                </div>
            </div>
        </div>
    )
}