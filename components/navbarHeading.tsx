import { Page } from '@/app/enums'
import { titanOne } from '@/app/fonts'
import Link from 'next/link'

interface NavbarHeadingProps {
    page: Page
}

export default function NavbarHeading({ page }: NavbarHeadingProps) {
    const getSpan = () => {
        switch (page) {
            case Page.Resume:
                return (
                    <span>
                        <Link href="/" className="hover:underline">Tristan Lannigan</Link>&apos;s <span className="text-[#35B2CA]">resume</span>
                    </span>
                )
            case Page.Projects:
                return (
                    <span>
                        <Link href="/" className="hover:underline">Tristan Lannigan</Link>&apos;s <span className="text-[#B2CA35]">projects</span>
                    </span>
                )
            case Page.About:
                return (
                    <span>
                        <span className="text-[#CA35B2]">About</span> <Link href="/" className="hover:underline">Tristan Lannigan</Link>
                    </span>
                )
            default:
                return <span>Tristan Lannigan</span>
        }
    }

    return <h1 className={`${titanOne.className} text-lg sm:text-4xl leading-none pl-4 sm:pl-0`}>{getSpan()}</h1>
}
