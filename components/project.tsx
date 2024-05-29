import Image, { StaticImageData } from 'next/image'
import { robotoMono } from '@/app/fonts'
import LinkButton from './linkButton'

interface ProjectProps {
    src: StaticImageData
    name: string
    description: string
    siteUrl?: string
    sourceUrl?: string
    priority?: boolean
}

export default function Project({ src, name, description, siteUrl = '', sourceUrl = '', priority = false }: ProjectProps) {
    return (
        <div className="mb-8 sm:mb-16">
            <Image src={src} className="shadow-md rounded-md max-h-[38rem] w-auto" placeholder='blur' priority={priority} alt={name} />
            <h2 className={`${robotoMono.className} text-2xl mt-6`}>{name}</h2>
            <p className="mt-2">{description}</p>
            <div className="flex gap-x-4 my-4">
                <LinkButton
                    text="Visit site"
                    disabledText="Site no longer available"
                    href={siteUrl}
                    isDisabled={siteUrl === ''}
                />
                <LinkButton
                    text="Repository"
                    disabledText="Private repository"
                    href={sourceUrl}
                    isDisabled={sourceUrl === ''}
                />
            </div>
        </div>
    )
}
