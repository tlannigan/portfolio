interface EducationProps {
    name: string
    startDate: string
    endDate: string
    institution: string
    location: string
}

export default function Education({ name, startDate, endDate, institution, location }: EducationProps) {
    return (
        <div className='mt-8'>
            <div className='flex flex-wrap justify-between'>
                <p className='font-bold'>{name}</p>
                <p className='italic'>{startDate} - {endDate}</p>
            </div>
            <p>{institution} - {location}</p>
        </div>
    )
}