import Image, { StaticImageData } from 'next/image'
import { robotoMono } from '@/app/fonts'
import Link from 'next/link'
import LinkButton from './linkButton'

interface ProjectProps {
    src: StaticImageData
    name: string
    description: string
    siteUrl?: string
    sourceUrl?: string
}

export default function Project({ src, name, description, siteUrl = '', sourceUrl = '' }: ProjectProps) {
    return (
        <div className="mb-16">
            <Image src={src} className="shadow-md rounded-md" alt="Dig Yourself Out web app" />
            <h2 className={`${robotoMono.className} text-2xl mt-6`}>{name}</h2>
            <p className="">{description}</p>
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
                    href={siteUrl}
                    isDisabled={sourceUrl === ''}
                />
            </div>
        </div>
    )
}
