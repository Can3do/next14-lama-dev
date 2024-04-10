'use client'
import { useState } from 'react'
import Link from 'next/link'

import { navLinks } from '@/constants'
import NavLink from './navlink/NavLink'
import BurgerMenu from '@/components/burgerMenu'
import { handleLogout } from '@/lib/action'


const Navbar = ({session}) => {
const [isMenuOpen, setIsMenuOpen] = useState(false)

// TEMPORAL


    return (
        <header className="w-full border-b border-slate-800">
            <div className='w-full flex items-center py-6 sm:py-8 sm:px-16 px-6 max-w-7xl mx-auto justify-between'>

            
            <Link href='/' className='font-bold text-2xl'>Can3do</Link>
            {/* Navegacion de escritorio */}
            <nav className='hidden lg:flex'>
                <ul className='flex gap-2 items-center'>
                    {navLinks.map((link) => (
                        <li key={link.id} className='flex'>
                            <NavLink link={link} isMobile={false}/>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-4'>
                    {
                        // primero se evalua si hay una sesion, en el caso deque haya, se evalua si es admin para renderizar el link de admin, en el casi de que no, solo se renderiza el de logout. Si no hay sesion, se renderiza un boton para iniciar sesion
                        session ? (
                            <>
                            {session.user?.isAdmin && <NavLink link={{title: 'Admin', path: '/admin', id: 'admin-navlink',}} isMobile={false}/>}
                            <form action={handleLogout}>
                                <button className='font-semibold text-white border-2 rounded-lg py-3 px-8 '>logout</button>
                            </form>
                            </>
                        ) : (
                            <Link href='/login' className='font-semibold text-white border-2 rounded-lg py-3 px-8 '>login</Link>
                        )
                    }
                </div>
            </nav>

            {/* navegacion de telefono */}
            <BurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden' isMenuOpen={isMenuOpen}/>
            
            {
                isMenuOpen && (
                    <div className='flex z-30 lg:hidden fixed right-0 bottom-0  left-0 top-0 w-[100%] justify-center bg-slate-950' >
                        <nav className='flex lg:hidden justify-center pt-[50%]'>
                            <ul className='flex flex-col gap-2 items-center'>
                                {navLinks.map((link) => (
                                    <li key={link.id} className='flex'>
                                        <NavLink link={link} functionOnClick={setIsMenuOpen} isMobile={true}/>
                                    </li>
                                ))}
                                {
                                    session ? (
                                        <>
                                        {session?.user.isAdmin && <li className='flex'><NavLink link={{title: 'Admin', path: '/admin', id: 'admin-navlink',}} functionOnClick={setIsMenuOpen} isMobile={true}/></li>}
                                        <form action={handleLogout}>
                                            <button className='font-semibold text-white border-2 rounded-lg py-3 px-8 '>logout</button>
                                        </form>
                                        
                                        </>
                                    ) : (
                                        <Link onClick={() => setIsMenuOpen(false)} href='/login' className='font-semibold text-white border-2 rounded-lg py-3 px-8 '>login</Link>
                                    )
                                }
                            </ul>
                        </nav>
                    </div>
    )
}
</div>
        </header>
    )
}

export default Navbar