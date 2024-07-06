import { useState } from "react";
import { Link } from "@inertiajs/react"; // Import Link from Inertia

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(!animate);
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <header className="header">
                <div className="logo_nav">
                    <div className="logo_image">
                        <img src="Images/logo.png" alt="Logo Image" />
                    </div>
                    <nav className="navigation">
                        <ul>
                            <li>
                                <Link href="#">Features</Link>
                            </li>
                            <li>
                                <Link href="#">Blogs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div
                    className={`bars ${animate ? "animate" : ""}`}
                    onClick={handleClick}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="btns">
                    <button className="pri_btn">Login</button>
                    <button className="sec_btn">Sign Up</button>
                </div>
                <div className={`mobile_menu ${menuVisible ? "show" : ""}`}>
                  
                    <nav className="mb_navigation">
                        <ul>
                            <li>
                                <Link href="#">Features</Link>
                            </li>
                            <li>
                                <Link href="#">Blogs</Link>
                            </li>
                            <li>
                                <Link href="#">Login</Link>
                            </li>
                            <li>
                                <Link href="#">Sign Up</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
