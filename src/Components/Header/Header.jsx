import "./Header.css"
import logo from "../../Assets/images/logo.svg"
import searchIcon from "../../Assets/images/searchIcon.svg"
import pfp from "../../Assets/images/pfp.png"
import hamburgerIcon from "../../Assets/images/hamburgerIcon.svg"
//components
import Carousel from "./Carousel/Carousel"
import { useState } from "react"

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    const openMenu = () => {
        if(isOpen) {
            document.getElementById("MobileMenu").classList.add('Hidden');
            setIsOpen(false);
        } else {
            document.getElementById("MobileMenu").classList.remove('Hidden');
            setIsOpen(true);
        }
    }

    return (
        <section className="HeaderSection">
            <div className="Header">
                <button onClick={openMenu} className="HamBur"><img  src={hamburgerIcon} alt="hamburger" width={20} style={{margin:"0"}}/></button>
                <div className="MobileMenu Hidden" id="MobileMenu">
                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="./">About Us</a></li>
                        <li><a href="./">Services</a></li>
                        <li><a href="./">Contact Us</a></li>
                    </ul>
                </div>
                <img src={logo} alt="logo"/>
                <div className="Navlinks">
                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="./">About Us</a></li>
                        <li><a href="./">Services</a></li>
                        <li><a href="./">Contact Us</a></li>
                    </ul>
                </div>
                <div className="SearchBox">
                    <p>Search</p>
                    <img src={searchIcon} alt="q" height={26} />
                </div>
                {/* <input placeholder="Search"></input> */}
                <div className="UserProfile">
                    <img src={pfp} alt="pr" />

                    {/* <label for="profile">John Doe</label> */}
                    <div className="ProfileDropdown">
                        <select name="profile" id="profile">
                            <option value="name">John Doe</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone No.</option>
                            <option value="signOut">Sign Out</option>
                        </select>
                    </div>
                </div>
            </div>
            <Carousel />
        </section>
    )
}

export default Header;