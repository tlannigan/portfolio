import Image, { StaticImageData } from 'next/image'
import { robotoMono } from '@/app/fonts'
import LinkButton from './linkButton'

interface ProjectProps {
    src: StaticImageData
    imgHeight: number
    imgWidth: number
    name: string
    description: string
    siteUrl?: string
    sourceUrl?: string
}

export default function Project({ src, imgHeight, imgWidth, name, description, siteUrl = '', sourceUrl = '' }: ProjectProps) {
    return (
        <div className="mb-8 sm:mb-16">
            <Image src={src} height={imgHeight} width={imgWidth} className="shadow-md rounded-md max-h-[38rem] w-auto" alt="Dig Yourself Out web app" />
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
                    href={siteUrl}
                    isDisabled={sourceUrl === ''}
                />
            </div>
        </div>
    )
}
