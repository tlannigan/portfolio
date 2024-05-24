import { Page } from '@/app/enums'
import { titanOne } from '@/app/fonts'

interface NavbarHeadingProps {
    page: Page
}

export default function NavbarHeading({ page }: NavbarHeadingProps) {
    const getSpan = () => {
        switch (page) {
            case Page.Resume:
                return <span>Tristan Lannigan&apos;s <span className='text-[#35B2CA]'>resume</span></span>
            case Page.Projects:
                return <span>Tristan Lannigan&apos;s <span className='text-[#B2CA35]'>projects</span></span>
            case Page.About:
                return <span><span className='text-[#CA35B2]'>About</span> Tristan Lannigan</span>
            default:
                return <span>Tristan Lannigan</span>
        }
    }

    return (
        <h1 className={`${titanOne.className} text-4xl`}>{getSpan()}</h1>
    )
}