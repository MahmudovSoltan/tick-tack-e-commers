
'use client'
import Logo from "@/app/components/header/logo"
import './css/header.css'
import HeaderLinks from "@/app/components/header/headerLinks"
import Adress from "./Adress"
import HeaderSearch from "./HeaderSearch"
import MobileHeader from "@/app/(main)/header/MobileHeader"
import { IoMdMenu } from "react-icons/io"
import { useState } from "react"

const Header = ({ role }: { role: string }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

            <div className="mobile_menu_icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoMdMenu size={24} />
            </div>

            <MobileHeader isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

        </header>
    )
}

export default Header