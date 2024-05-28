import type { Metadata } from 'next'
import './globals.css'
import { roboto, robotoMono, titanOne } from './fonts'
import HtmlComment from '@/components/htmlComment'

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
            <body className={roboto.className}>
                {/* This says TLANNIGAN in ASCII art*/}
                <HtmlComment comment={`  _________  ___       ________  ________   ________   ___  ________  ________  ________       `} />
                <HtmlComment comment={` |\\___   ___\\\\  \\     |\\   __  \\|\\   ___  \\|\\   ___  \\|\\  \\|\\   ____\\|\\   __  \\|\\   ___  \\     `} />
                <HtmlComment comment={` \\|___ \\  \\_\\ \\  \\    \\ \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\\\ \\  \\    `} />
                <HtmlComment comment={`      \\ \\  \\ \\ \\  \\    \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\  __\\ \\   __  \\ \\  \\\\ \\  \\   `} />
                <HtmlComment comment={`       \\ \\  \\ \\ \\  \\____\\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ \\  \\ \\  \\ \\  \\\\ \\  \\  `} />
                <HtmlComment comment={`        \\ \\__\\ \\ \\_______\\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\\\ \\__\\ \\__\\ \\_______\\ \\__\\ \\__\\ \\__\\\\ \\__\\ `} />
                <HtmlComment comment={`         \\|__|  \\|_______|\\|__|\\|__|\\|__| \\|__|\\|__| \\|__|\\|__|\\|_______|\\|__|\\|__|\\|__| \\|__| `} />
                {children}
            </body>
        </html>
    )
}
