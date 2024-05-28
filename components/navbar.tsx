import { Page } from '@/app/enums';
import NavbarHeading from './navbarHeading';
import ShapeNav from './shapeNav';

interface NavbarProps {
    page: Page
}

export default function Navbar({ page }: NavbarProps) {
    return (
        <div className='flex flex-row gap-x-4 justify-between'>
            <NavbarHeading page={page} />
            <ShapeNav page={page} />
        </div>
    )
}