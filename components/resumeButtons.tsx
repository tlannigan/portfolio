'use client'

import { Download } from '@mui/icons-material'

export default function FloatingButton() {
    const download = () => {

    }

    const print = () => {

    }

    return (
        <div className='fixed bottom-0 xl:container !max-w-screen-md w-full flex justify-end'>
            <a href="/tristanlannigan_resume.pdf" download>
                <button onClick={download} className='hover:bg-black hover:text-white transition-all border-2 rounded-md py-1 pl-2 pr-4 bg-white border-black mr-4 mb-4'><Download /> Download</button>
            </a>
        </div>
    )
}