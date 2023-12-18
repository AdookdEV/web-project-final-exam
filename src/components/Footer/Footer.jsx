import './style.css';
import FooterMenu from "./FooterMenu";
import FooterSidebar from "./FooterSidebar";

function Footer() {
    return (
        <footer className="footer">
            <div className="container-lg">
                <div className="footer__top">
                    <FooterSidebar />
                    <FooterMenu />
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container-lg">
                    © 2023 Copyright
                </div>
            </div>
        </footer>
    );
}

export default Footer;