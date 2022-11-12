import React from "react";
import { MdMenu } from "react-icons/md"
import "../Header/Header.css"
import logo from "../../assets/serPal.png"

const Header = () => {
    return(
        <header>
            <div>
                <img src={logo} alt="Logo" className="logoImage"/>
            </div>
        </header>
    )
}

export default Header;