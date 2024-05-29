import Navbar from '@/components/navbar';
import { Page } from '../enums';
import Project from '@/components/project';
import ordr from '@/public/ordr.png'
import digYourselfOut from '@/public/digyourselfout.png'
import apollo from '@/public/apollo.png'
import colourSmashing from '@/public/colour_smashing.png'

export default function ProjectsPage() {
    const page = Page.Projects
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="xl:container !max-w-screen-md h-full flex flex-col gap-y-0 sm:gap-y-8 mx-auto">
                <Navbar page={page} />
                <div className='flex flex-col mt-8 p-4 sm:p-0'>
                    <Project
                        src={ordr}
                        imgHeight={436}
                        imgWidth={768}
                        name="Ordr Android App"
                        description="Food delivery app for sports stadiums, with integrated delivery service and third-party point-of-sale and inventory integrations."
                        siteUrl='https://play.google.com/store/apps/details?id=com.ordr.app' />
                    <Project
                        src={digYourselfOut}
                        imgHeight={768}
                        imgWidth={430}
                        name='Dig Yourself Out'
                        description='Log parsing tool for modded Minecraft. Finds common issues in log files and displays them for users.'
                        siteUrl='https://digyourselfout.app'
                        sourceUrl='https://github.com/tlannigan/dig-yourself-out' />
                    <Project
                        src={apollo}
                        imgHeight={768}
                        imgWidth={586}
                        name='Apollo Overwolf App'
                        description='Gaming app centered around providing new and unique audio experiences in games that don&apos;t already provide them, enhancing player experiences. Learns user preferences over time to recommend the best music in the moment.'
                        siteUrl='https://www.overwolf.com/app/players_republik-apollo' />
                    <Project
                        src={colourSmashing}
                        imgHeight={1079}
                        imgWidth={575}
                        name='Colour Smashing'
                        description='Simple colour matching game I made to relieve my girlfriend of boredom.'
                        siteUrl='https://tlannigan.github.io/colour-smashing'
                        sourceUrl='https://github.com/tlannigan/colour-smashing' />
                </div>
            </div>
        </div>
    )
}