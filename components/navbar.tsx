import { Page } from '@/app/enums';
import NavbarHeading from './navbarHeading';
import ShapeNav from './shapeNav';

interface NavbarProps {
    page: Page
}

export default function Navbar({ page }: NavbarProps) {
    return (
        <div className='lg:min-w-[1024px] flex flex-row gap-x-16 justify-between mx-auto'>
            <NavbarHeading page={page} />
            <ShapeNav page={page} />
        </div>
    )
}