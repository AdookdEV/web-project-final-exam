import { BiBarChart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { PiUserLight } from "react-icons/pi";
import { Link } from "react-router-dom";


const icons = {
    "user": (<PiUserLight className="icon-user" />),
    "favourite": (<GoHeart className="icon-favourite" />),
    "cart": (<BsCart3 className="icon-cart" />),
    "compare": (<BiBarChart className="icon-compare" />)
};

export const ControllButton = ({className, text, iconName, url}) => {
    return (
        <Link className={`header__control-btn ${className}`} to={url}>
            {icons[iconName]}
            <span className="header__control-text">{text}</span>
        </Link>
    );
};