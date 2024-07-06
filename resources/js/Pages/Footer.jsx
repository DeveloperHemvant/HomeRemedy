import { Link } from "@inertiajs/react"; // Import Link from Inertia

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer_logo_img">
                    <img src="Images/logo.png" alt="Logo Image" />
                </div>
                <div className="footer_nav">
                    <ul>
                        <li>
                            <Link href="/terms">Terms & conditions</Link>
                        </li>
                        <li>
                            <Link href="/privacypolicies">Privacy policy</Link>
                        </li>
                        <li>
                            <Link href="/notification-privacypolicies">Notifications Privacy policy</Link>
                        </li>
                        <li>
                            <Link href="/notification-conditions">Notifications Terms & conditions</Link>
                        </li>
                        <li>
                            <Link href="#">Support</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer_divider">
                    <img src="Images/Divider.png" alt="Divider Image" />
                </div>
                <div className="social_media">
                    <a href="#">
                        <img src="Images/facebook.png" alt="Facebook Icon" />
                    </a>
                    <a href="#">
                        <img src="Images/insta.png" alt="Instagram Icon" />
                    </a>
                    <a href="#">
                        <img src="Images/twitter.png" alt="Twitter Icon" />
                    </a>
                    <a href="#">
                        <img src="Images/pintrest.png" alt="Pinterest Icon" />
                    </a>
                    <a href="#">
                        <img src="Images/youtube.png" alt="Youtube Icon" />
                    </a>
                    <a href="#">
                        <img src="Images/message.png" alt="Message Icon" />
                    </a>
                </div>
                <p>© 2024 Health Remedy. All Rights Reserved.</p>
            </footer>
        </>
    );
}
