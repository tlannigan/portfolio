import Navbar from '@/components/navbar'
import { Page } from '../enums'
import Image from 'next/image'
import me from '@/public/tristanlannigan.png'
import Link from 'next/link'
import { GitHub, LinkedIn } from '@mui/icons-material'

export default function AboutPage() {
    const page = Page.About
    return (
        <div className="min-h-dvh mx-auto py-4 overflow-hidden">
            <div className="xl:container !max-w-screen-md h-full flex flex-col gap-y-8 mx-auto">
                <Navbar page={page} />
                <div className='flex flex-wrap p-4 sm:p-0 gap-y-4'>
                    <div className='sm:basis-1/2'>
                        <Image src={me} placeholder="blur" priority={true} className='rounded-md shrink' alt="Tristan Lannigan" />
                    </div>
                    <div className='sm:basis-1/2 p-2 sm:px-8 flex flex-col justify-between'>
                        <div>
                            <h2 className='text-2xl'>Tristan Lannigan</h2>
                            <h3 className='text-lg mb-4'>Software Developer</h3>
                            <p className='pb-4'>Hi, I&apos;m Tristan. I develop websites and apps that make people say, &quot;Wow, that&apos;s pretty nifty!&quot; I find joy in creating UI that provides users with feedback, from small jitters to clean animations.</p>
                            <p className='pb-4'>On my days off you can find me playing video games, going for scenic drives, identifying mushrooms in the forest, or starting a new side project that is definitely going to be finished.</p>
                        </div>
                        <div className='flex gap-x-4'>
                            <Link href="https://github.com/tlannigan">
                                <GitHub fontSize="large" className='transition-transform duration-150 hover:scale-110' />
                            </Link>
                            <Link href="https://www.linkedin.com/in/tristanlannigan/">
                                <LinkedIn fontSize="large" className='transition-transform duration-150 hover:scale-110' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
