import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./style.scss";

import ContentWrapper from "../ContentWrapper";
import LoremIpsum from "react-lorem-ipsum";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    <LoremIpsum />
                </div>
                <div className="socialIcons">
                    <a className="icon" href="https://www.facebook.com/nguyentoan121199/" target="_blank" rel="noreferrer noopener">
                        <FaFacebookF />
                    </a>
                    <a className="icon" href="https://www.instagram.com/d.ffy.ly/" target="_blank" rel="noreferrer noopener">
                        <FaInstagram />
                    </a>
                    <a className="icon" href="https://twitter.com/JollyNguyen16" target="_blank" rel="noreferrer noopener">
                        <FaTwitter />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/to%C3%A0n-nguy%E1%BB%85n-ho%C3%A0ng-anh-01a2b9272/" target="_blank" rel="noreferrer noopener">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
