import Link from 'next/link'

interface LinkButtonProps {
    text: string
    disabledText?: string
    href: string
    isDisabled: boolean
}

export default function LinkButton({ text, disabledText, href, isDisabled }: LinkButtonProps) {
    const getText = () => isDisabled ? (disabledText ? disabledText : text) : text
    return (
        <Link
            href={href}
            className={`hover:bg-black hover:text-white transition-all border-2 rounded-md py-1 px-4 ${!isDisabled ? 'border-black' : 'border-grey bg-slate-100 pointer-events-none'}`}
            aria-disabled={isDisabled}>
            {getText()}
        </Link>
    )
}
