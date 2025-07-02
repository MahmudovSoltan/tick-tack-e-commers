import Logo from "@/app/components/header/logo"
import './css/header.css'
import HeaderLinks from "@/app/components/header/headerLinks"
import Adress from "./Adress"
import HeaderSearch from "./HeaderSearch"

const Header = ({ role }: { role: string }) => {
    return (
        <header className="header_container">
            <Logo />
            {role !== "landing" && (
                <>
                    <Adress />
                    <HeaderSearch />
                </>
            )}
            <HeaderLinks />
        </header>
    )
}

export default Header