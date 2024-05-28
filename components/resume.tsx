import Job from './job'
import Education from './education'

export default function Resume() {
    return (
        <div className='sm:shadow-md p-4 sm:p-16 mb-4'>
            <div className="mb-8">
                <h2 className="font-bold text-center text-4xl text-[#35B2CA]">Tristan Lannigan</h2>
                <p className="text-center">Edmonton, Alberta - (506) 229-6535 - tristanlannigan@gmail.com</p>
                <p className="text-center">tlannigan.com</p>
            </div>
            <div>
                <h3 className="font-bold text-xl mb-8 text-[#35B2CA]">WORK EXPERIENCE</h3>
                <Job
                    jobTitle="Software Developer"
                    company="Lantern"
                    startDate="May 2023"
                    endDate="Present"
                    projectDescription="Insurance Online Claims (ASEBP) - Client-led project"
                    technologies={['Java', 'Kotlin', 'Android', 'TypeScript', 'C#']}
                    jobDescriptions={[
                        'Led the end-to-end development of multiple web and Android applications, enhancing user experience and functionality.',
                        'Developed internal apps for various business functions, such as an internal company employee listing app and an estimate generation tool.',
                        'Participated in weekly sprint planning and retrospective ceremonies, improving team collaboration and project timelines.',
                        'Enhanced legacy codebases by implementing new features, resulting in a 20% decrease in claims done over telephone and mail.',
                    ]}
                />
                <Job
                    jobTitle="Fullstack Developer"
                    company="Ordr Technologies Inc. (Startup)"
                    startDate="Apr 2022"
                    endDate="May 2023"
                    projectDescription="Food delivery Android app"
                    technologies={['Kotlin', 'Android', 'Node.js', 'REST APIs']}
                    jobDescriptions={[
                        'Developed a commercial Android app through its entire lifecycle, from conception to deployment.',
                        'Engaged with customers to gather feedback and directly addressed their concerns, improving customer satisfaction by 35%.',
                        'Conducted requirements gathering sessions to determine the best technical solutions for business needs, ensuring project alignment with business objectives.',
                        'Designed and developed REST APIs with Node.js, enhancing app functionality and scalability.',
                    ]}
                />
                <Job
                    jobTitle="Developer"
                    company="Five Vectors Inc. (Startup)"
                    startDate="Sep 2019"
                    endDate="Mar 2020"
                    projectDescription="Gaming industry music/audio app"
                    technologies={['JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS']}
                    jobDescriptions={[
                        'Developed frontend and backend implementations for music/audio apps in the gaming industry.',
                        'Planned and implemented backend systems, including REST APIs and databases using AWS services.',
                        'Introduced audio streaming capabilities, enhancing user experience.',
                        'Organized development cycles with sprint planning meetings, improving project delivery timelines.',
                    ]}
                />
                <Job
                    jobTitle="Web Developer"
                    company="VidCruiter Inc."
                    startDate="Feb 2019"
                    endDate="Sep 2019"
                    projectDescription="Company website"
                    technologies={['WordPress', 'HTML', 'CSS', 'JavaScript', 'jQuery']}
                    jobDescriptions={[
                        'Created custom WordPress templates and themes for the company website, improving design flexibility.',
                        'Optimized site performance and Lighthouse rankings, achieving a 25% increase in site speed and reducing server bandwidth usage by 40%.',
                        'Designed mock UI/UX using Photoshop, Illustrator, and Figma.',
                    ]}
                />
                <Job
                    jobTitle="Systems Administrator"
                    company="ITEC 2000 Equipment & Hydraulics"
                    startDate="Apr 2018"
                    endDate="Aug 2018"
                    projectDescription="IT infrastructure management"
                    technologies={['VoIP', 'Wireless Access Points', 'Windows Server', 'Google Apps Script']}
                    jobDescriptions={[
                        'Ensured high availability for both user machines and on-site servers for 20 users across two sites, handling updates, backups, group policies, and website maintenance.',
                        'Provided technical support for VoIP configurations and wireless access points, enhancing communication efficiency.',
                        'Improved operational security by implementing MFA, SSO, and password vaults, improving user productivity.'
                    ]}
                />
            </div>
            <div>
                <h3 className='font-bold text-xl mb-8 text-[#35B2CA]'>EDUCATION</h3>
                <Education
                    name='Bachelor of Science: Computer Science'
                    startDate='Sep 2021'
                    endDate='Feb 2022'
                    institution='Athabasca University'
                    location='Athabasca, AB'
                />
                <Education
                    name='Web and Mobile Development'
                    startDate='Sep 2018'
                    endDate='Jun 2019'
                    institution='Oulton College'
                    location='Moncton, NB'
                />
            </div>
        </div>
    )
}
