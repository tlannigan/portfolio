'use client'

interface HtmlCommentProps {
    comment: string
}

export default function HtmlComment({ comment }: HtmlCommentProps) {
    const spacePreservedComment = comment.replaceAll(' ', '\u00A0')
    const html = `<!-- ${spacePreservedComment} -->`
    const callback = (instance: any) => {
        if (instance) {
            instance.outerHTML = html
        }
    }
    return (<script ref={callback} type="text/comment" dangerouslySetInnerHTML={{ __html: html }} />)
}