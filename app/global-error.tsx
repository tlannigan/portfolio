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
        <p>{error.name}</p>
        <p>{error.message}</p>
        <p>{error.digest}</p>
        <p>{error.stack}</p>
      </body>
    </html>
  )
}