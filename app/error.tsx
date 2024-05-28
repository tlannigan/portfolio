'use client'

import { useEffect } from 'react'

export default function Error({ 
    error,
    reset
 }: {
    error: Error & { digest?: string }
    reset: () => void
 }) {
    <div>
        <p className='mb-4'>{error.name}</p>
        <p className='mb-4'>{error.message}</p>
        <p className='mb-4'>{error.digest}</p>
        <p className='mb-4'>{error.stack}</p>
        <p className='mb-4'>{error.cause?.toString()}</p>
    </div>
 }