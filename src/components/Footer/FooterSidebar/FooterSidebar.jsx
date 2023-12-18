import { PiTelegramLogo, PiYoutubeLogo } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { Link } from "react-router-dom";

function FooterSidebar() {
    return (
        <div className="footer__sidebar">
            <div className="footer__logo-area">
                <Link className="footer__logo" to="/"><img src="/images/fine_logo.png" alt="" /></Link>
            </div>
            <div className="footer__contacts-area">
                <div className="footer__phone">
                    <a className="footer__phone-value" href="tel: +7(747)77755522" >+7(747)77755522</a><br />
                    <div>Support</div>
                </div>
                <div className="footer__phone">
                    <a className="footer__phone-value" href="tel: +7(747)77755522" >+7(747)77755522</a><br />
                    <div>Online Store</div>
                </div>
            </div>
            <div className="footer__social-area">
                <div className="footer__title">Stay in touch</div>
                <div className="social_items">
                    <a className="social_link" href="https://web.telegram.org/" target="_blank" rel="noreferrer"><PiTelegramLogo className="social_icon" /></a>
                    <a className="social_link" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><PiYoutubeLogo className="social_icon" /></a>
                    <a className="social_link" href="https://vk.com/" target="_blank" rel="noreferrer"><SlSocialVkontakte className="social_icon" /></a>
                </div>
            </div>
        </div>
    );
}

export default FooterSidebar;