import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ toggle }) => {
    return (
        <div>
            <nav className="flex justify-between h-16 items-center bg-white text-black position-relative shadow-sm font-mono" role="navigation">
                <Link to='/' className='pl-8'>Logo</Link>
                <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className="pr-8 md:block hidden">
                    <Link className="p-4" to='/'>Home</Link>
                    <Link className="p-4" to='/menu'>Menu</Link>
                    <Link className="p-4" to='/about'>About</Link>
                    <Link className="p-4" to='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
    )
}
