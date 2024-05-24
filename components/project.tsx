import Image, { StaticImageData } from 'next/image';
import { robotoMono } from '@/app/fonts';
import Link from 'next/link';

interface ProjectProps {
    src: StaticImageData
    name: string
    description: string
    siteUrl?: string
    sourceUrl?: string
}

export default function Project({ src, name, description, siteUrl = '', sourceUrl = '' }: ProjectProps) {
    const isSiteAvailable = siteUrl !== ''
    const isSourceAvailable = sourceUrl !== ''

    return (
        <div className='mb-16'>
            <Image src={src} className='shadow-md rounded-md' alt="Dig Yourself Out web app" />
            <h2 className={`${robotoMono.className} text-2xl mt-6`}>{name}</h2>
            <p className=''>{description}</p>
            <div className='flex gap-x-4 my-4'>
                <Link className={`hover:bg-black hover:text-white transition-all border-2 rounded-md py-1 px-4 ${isSiteAvailable ? 'border-black' : 'border-grey bg-slate-100 pointer-events-none'}`} aria-disabled={isSiteAvailable} href={siteUrl}>{isSiteAvailable ? 'Site' : 'Site no longer available'}</Link>
                <Link className={`hover:bg-black hover:text-white transition-all border-2 rounded-md py-1 px-4 ${isSourceAvailable ? 'border-black' : 'border-grey bg-slate-100 pointer-events-none'}`} aria-disabled={isSourceAvailable} href={sourceUrl}>{isSourceAvailable ? 'Source' : 'Private source'}</Link>
            </div>
        </div>
    )
}