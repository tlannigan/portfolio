interface JobProps {
    jobTitle: string
    company: string
    startDate: string
    endDate: string
    projectDescription: string
    technologies: string[]
    jobDescriptions: string[]
}

export default function Job({
    jobTitle,
    company,
    startDate,
    endDate,
    projectDescription,
    technologies,
    jobDescriptions,
}: JobProps) {
    const descriptions = jobDescriptions.map((d, i) => {
        return (
            <li key={i} className="ml-4">
                {d}
            </li>
        )
    })
    return (
        <div className='mb-8'>
            <div className="flex flex-wrap justify-between">
                <p>
                    <span className="font-bold">{jobTitle}</span>, {company}
                </p>
                <p className="italic">
                    {startDate} - {endDate}
                </p>
            </div>
            <p className="mb-4">Project: {projectDescription}</p>
            <ul className="list-disc">
                <li className="ml-4">
                    <span className="italic">Technologies:</span> {technologies.join(', ')}
                </li>
                {descriptions}
            </ul>
        </div>
    )
}
