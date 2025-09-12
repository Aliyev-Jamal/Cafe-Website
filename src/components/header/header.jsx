import myLogo from '../../assets/logo.svg'
import HeaderBurger from './header-burger'
import HeaderMenu from './header-menu'

const Header = () => {
    return (
        <header className={'fixed select-none top-0 left-0 w-full border-b border-b-white/10 backdrop-blur-sm z-100'}>
            <div className="container">
                <nav className={'h-[89px] flex items-center justify-between'}>
                    <img src={myLogo} alt="#" />
                    <HeaderMenu />
                    <HeaderBurger />
                </nav>
            </div>
        </header>
    )
}

export default Header