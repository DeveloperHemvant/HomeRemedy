import { Link, Head } from "@inertiajs/react";
import { useEffect } from "react";

export default function Welcome() {
    return (
        <>
            <Head title="Home Remedies" />
            <div class="header_banner">
                <div class="banner_top">
                    <img src="Images/banner.png" alt="banner" />
                </div>
                <div class="header_banner_wrapper">
                    <header class="header">
                        <div class="logo_nav">
                            <div class="logo_image">
                                <img src="Images\logo.png" alt="Logo Image" />
                            </div>
                            <nav class="navigation">
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
                        <div class="bars">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                        <div class="btns">
                            <button class="pri_btn">Login</button>
                            <button class="sec_btn">Sign Up</button>
                        </div>
                        <div class="mobile_menu">
                            <div class="mb_btns">
                                <button class="pri_btn">Login</button>
                                <button class="sec_btn">Sign Up</button>
                            </div>
                            <nav class="mb_navigation">
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
                    <section class="banner_section">
                        <div class="left_section">
                            <div class="left_top">
                                <h3>
                                    Healthy<span> living made easy!!</span>
                                </h3>
                                <p>
                                    Get your custom plans <br />& one-on-one
                                    guidance from our experts
                                </p>
                            </div>
                            <div class="bottom">
                                <button class="sign_in">Sign in</button>
                                <p>
                                    <small>Sign in & get started today</small>
                                </p>
                            </div>
                        </div>
                        <div class="right_section">
                            <img src="Images\pngwing.png" alt="banner_image" />
                        </div>
                    </section>
                </div>
                <div class="banner_bg_image">
                    <img src="Images/after.png" alt="Banner Background" />
                </div>
            </div>
            <div>
                <footer class="footer">
                    <div class="footer_logo_img">
                        <img src="Images\logo.png" alt="Logo Image" />
                    </div>
                    <div class="footer_nav">
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
                    <div class="footer_divider">
                        <img src="Images\Divider.png" alt="Logo Image" />
                    </div>
                    <div class="social_media">
                        <a href="#">
                            <img
                                src="Images\facebook.png"
                                alt="Facebook Icon"
                            />
                        </a>
                        <a href="#">
                            <img src="Images\insta.png" alt="Insta Icon" />
                        </a>
                        <a href="#">
                            <img src="Images\twitter.png" alt="Twitter Icon" />
                        </a>
                        <a href="#">
                            <img
                                src="Images\pintrest.png"
                                alt="Pintrest Icon"
                            />
                        </a>
                        <a href="#">
                            <img src="Images\youtube.png" alt="Youtube Icon" />
                        </a>
                        <a href="#">
                            <img src="Images\message.png" alt="Message Icon" />
                        </a>
                    </div>
                    <p>© 2023 Cornea clinic PVT. LTD. All Rights Reserved.</p>
                </footer>
            </div>
        </>
    );
}
