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
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <p>{error.digest}</p>
        <p>{error.stack}</p>
    </div>
 }