import React from 'react'
import { navItems } from './consts'

const MobileMenu = () => {
    return (
        <ul className='absolute right-0 top-0 hidden max-[520px]:flex flex-col items-center gap-5 min-h-screen bg-amber-500 py-24 w-full max-h-1/2 duration-300'>
            {navItems.map(item => (
                <li key={item.id}>
                    <a className={`${item.isActive && `text-custom-green`}`} href="">
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default MobileMenu