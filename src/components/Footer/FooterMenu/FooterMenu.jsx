const { Link } = require("react-router-dom");

function FooterMenu() {
    return (
        <div className="footer__menu">
            <div className="footer__menu-item">
                <div className="footer__menu-title">About store</div>
                <Link className="footer__menu-link">Terms of exchange and refund</Link>
                <Link className="footer__menu-link">Catalog</Link>
                <Link className="footer__menu-link">Contacts</Link>
                <Link className="footer__menu-link">Delivery</Link>
                <Link className="footer__menu-link">Payment</Link>
            </div>
            <div className="footer__menu-item">
                <div className="footer__menu-title">For clients</div>
                <Link className="footer__menu-link">Profile</Link>
                <Link className="footer__menu-link">Blog</Link>
                <Link className="footer__menu-link">Feedback</Link>
            </div>
            <div className="footer__menu-item">
                <div className="footer__menu-title">Information</div>
                <Link className="footer__menu-link">User agreement</Link>
                <Link className="footer__menu-link">Privacy Policy</Link>
            </div>
        </div>
    );
}

export default FooterMenu;