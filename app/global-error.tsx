'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p className='mb-4'>{error.name}</p>
        <p className='mb-4'>{error.message}</p>
        <p className='mb-4'>{error.digest}</p>
        <p className='mb-4'>{error.stack}</p>
        <p className='mb-4'>{error.cause?.toString()}</p>
      </body>
    </html>
  )
}