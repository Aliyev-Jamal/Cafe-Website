import { navItems } from "./consts"

const HeaderMenu = () => {
    return (
        <ul className={'text-white flex items-center gap-[45px] max-sm:gap-[20px] max-[520px]:hidden'}>
            {navItems.map(item => (
                <li key={item.id}>
                    <a className={`text-sm font-bold hover:underline ${item.isActive && 'text-custom-green'}`} href="">
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default HeaderMenu