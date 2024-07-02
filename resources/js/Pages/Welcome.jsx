import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
// import './App.css'; // Assuming you have a CSS file for styles

export default function Welcome() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClick = (event) => {
        if (event.target !== event.currentTarget) {
            setAnimate(!animate);
            setMenuVisible(!menuVisible);
        }
    };

    return (
        <>
            <Head title="Home Remedies" />
            <div className="header_banner">
                <div className="banner_top">
                    <img src="Images/banner.png" alt="banner" />
                </div>
                <div className="header_banner_wrapper">
                    <header className="header">
                        <div className="logo_nav">
                            <div className="logo_image">
                                <img src="Images/logo.png" alt="Logo Image" />
                            </div>
                            <nav className="navigation">
                                <ul>
                                    <li>
                                        <a href="#">Features</a>
                                    </li>
                                    <li>
                                        <a href="#">Blogs</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={`bars ${animate ? 'animate' : ''}`} onClick={handleClick}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        <div className="btns">
                            <button className="pri_btn">Login</button>
                            <button className="sec_btn">Sign Up</button>
                        </div>
                        <div className={`mobile_menu ${menuVisible ? 'show' : ''}`}>
                            <div className="mb_btns">
                                <button className="pri_btn">Login</button>
                                <button className="sec_btn">Sign Up</button>
                            </div>
                            <nav className="mb_navigation">
                                <ul>
                                    <li>
                                        <a href="#">Features</a>
                                    </li>
                                    <li>
                                        <a href="#">Blogs</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                    <section className="banner_section">
                        <div className="left_section">
                            <div className="left_top">
                                <h3>
                                    Healthy<span> living made easy!!</span>
                                </h3>
                                <p>
                                    Get your custom plans <br />& one-on-one
                                    guidance from our experts
                                </p>
                            </div>
                            <div className="bottom">
                                <button className="sign_in">Sign in</button>
                                <p>
                                    <small>Sign in & get started today</small>
                                </p>
                            </div>
                        </div>
                        <div className="right_section">
                            <img src="Images/pngwing.png" alt="banner_image" />
                        </div>
                    </section>
                </div>
                <div className="banner_bg_image">
                    <img src="Images/after.png" alt="Banner Background" />
                </div>
            </div>
            <div>
                <footer className="footer">
                    <div className="footer_logo_img">
                        <img src="Images/logo.png" alt="Logo Image" />
                    </div>
                    <div className="footer_nav">
                        <ul>
                            <li>
                                <a href="#">Terms & conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy policy</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Cookie policy</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_divider">
                        <img src="Images/Divider.png" alt="Logo Image" />
                    </div>
                    <div className="social_media">
                        <a href="#">
                            <img src="Images/facebook.png" alt="Facebook Icon" />
                        </a>
                        <a href="#">
                            <img src="Images/insta.png" alt="Insta Icon" />
                        </a>
                        <a href="#">
                            <img src="Images/twitter.png" alt="Twitter Icon" />
                        </a>
                        <a href="#">
                            <img src="Images/pintrest.png" alt="Pintrest Icon" />
                        </a>
                        <a href="#">
                            <img src="Images/youtube.png" alt="Youtube Icon" />
                        </a>
                        <a href="#">
                            <img src="Images/message.png" alt="Message Icon" />
                        </a>
                    </div>
                    <p>© 2023 Cornea clinic PVT. LTD. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    );
}
