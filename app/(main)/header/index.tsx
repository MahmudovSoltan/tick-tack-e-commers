import Logo from "@/app/components/header/logo"
import './css/header.css'
import HeaderLinks from "@/app/components/header/headerLinks"
const Header = () => {
    return (
        <header className="header_container">
            <Logo />
            <HeaderLinks />
        </header>
    )
}

export default Header