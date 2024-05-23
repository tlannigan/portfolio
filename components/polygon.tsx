'use client'

import { Page, Shape } from '@/app/enums'
import { sleep } from '@/app/time'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PolygonProps {
    shape: Shape
    page: Page
}

interface NavItemInfo {
    id: string
    href: string
}

export default function Polygon({ shape, page }: PolygonProps) {
    const router = useRouter()
    const [isCovered, setIsCovered] = useState(isActiveLink())

    const { id, href } = getNavItemInfo(shape)

    useEffect(() => {
        async function uncover() {
            console.log(id)
            const element = document.getElementById(id)
            element?.classList.add('duration-500')
            element?.classList.remove('scale-[100]')
            await sleep(500)
            element?.classList.remove('duration-500')
            element?.classList.add('hover:scale-110')
        }
        if (isCovered) {
            uncover()
            setIsCovered(false)
        }
    }, [isCovered, id])

    function isActiveLink() {
        return (shape === Shape.Square && page === Page.Resume) ||
            (shape === Shape.Triangle && page === Page.Projects) ||
            (shape === Shape.Circle && page === Page.About)
    }
    
    function getSquareClasses(): string {
        if (page === Page.Home) {
            return 'w-40 h-40 bg-black'
        } else {
            return 'w-10 h-10 bg-black'
        }
    }
    
    function getCircleClasses(): string {
        if (page === Page.Home) {
            return 'w-40 h-40 rounded-full bg-black'
        } else {
            return 'w-10 h-10 rounded-full bg-black'
        }
    }
    
    function getTriangleStyles() {
        if (page === Page.Home) {
            return {
                width: '0',
                height: '0',
                borderLeft: '5.5rem solid transparent',
                borderRight: '5.5rem solid transparent',
                borderBottom: '10rem solid black'
            }
        } else {
            return {
                width: '0',
                height: '0',
                borderLeft: '1.5rem solid transparent',
                borderRight: '1.5rem solid transparent',
                borderBottom: '2.5rem solid black'
            }
        }
    }
    
    const coverPage = async (e: any) => {
        const element = document.getElementById(id)
        element?.classList.remove('text-white', 'hover:scale-110')
        element?.classList.add('duration-1000', 'scale-[100]')
        await sleep(1000)
        router.push(href)
    }

    return (
        <div
            id={id}
            onClick={coverPage}
            className={`
                ${shape === Shape.Square ? getSquareClasses() : ''} 
                ${shape === Shape.Circle ? getCircleClasses() : ''} 
                ${isCovered ? 'scale-[100]' : 'hover:scale-110'} 
                cursor-pointer transition-transform text-white
            `}
            style={shape === Shape.Triangle ? getTriangleStyles() : {}}
        >
            {getHeading(shape, page)}
        </div>
    )
}

function getNavItemInfo(shape: Shape): NavItemInfo {
    switch (shape) {
        case Shape.Square:
            return {
                id: 'square',
                href: '/resume'
            }
        case Shape.Triangle:
            return {
                id: 'triangle',
                href: '/projects'
            }
        case Shape.Circle:
            return {
                id: 'circle',
                href: '/about'
            }
    }
}

function getHeading(shape: Shape, page: Page) {
    if (page === Page.Home) {
        switch (shape) {
            case Shape.Square:
                return <p className="text-center pt-24">Resume</p>
            case Shape.Triangle:
                return <p className='text-center ml-[-2.4rem] pt-24'>Projects</p>
            case Shape.Circle:
                return <p className='text-center pt-24'>About</p>
        }
    } else {
        return <></>
    }
}