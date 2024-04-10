'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link, isMobile, functionOnClick}) => {
    const pathName = usePathname()
    return (
        <Link
            href={link.path}
            className={`${(pathName === link.path) || (pathName.includes(link.path) && link.path !== '/') ? 'bg-white text-black' : ''} py-2 px-5 rounded-full font-semibold`}
            key={link.title}
            onClick={isMobile ? () => functionOnClick(false) : null}
        >
            {link.title}
        </Link>
    )
}

export default NavLink