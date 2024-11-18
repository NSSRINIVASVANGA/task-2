import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import './index.css'

const Navbar = () => {
    return(
        <>
        <nav className = "nav-con">
            <div className = "part-1">
                <a> Dashboard </a>
                <a> Reports </a>
                <a> Settings </a>
            </div>
            <div className = "part-2">
                <FaFacebook/>
                <FaSquareXTwitter/>
                <FaLinkedin/>
                <FaInstagram/>
            </div>
        </nav>
        </>
    )
}

export default Navbar