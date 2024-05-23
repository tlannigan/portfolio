import type { Metadata } from 'next'
import './globals.css'
import { roboto, robotoMono, titanOne } from './fonts'

export const metadata: Metadata = {
    title: 'Tristan Lannigan',
    description: "Tristan Lannigan's portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${titanOne.variable} ${robotoMono.variable}`}>
            <body className={roboto.className}>{children}</body>
        </html>
    )
}
