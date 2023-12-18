import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

function CatalogButton({ onClick, catalogShow, children }) {

    const handleClick = () => {
        onClick();
    }

    return (
        <button className="header__btn-catalog" onClick={handleClick} type="button">
            <span>
                {
                    catalogShow ? <RxCross1 className="icon-catalog" /> : <HiMiniBars3 className="icon-catalog" />
                }
            </span>
            {
                children
                    ? <span className="btn-catalog__text">{children}</span>
                    : null
            }
            
        </button>
    );
}

export default CatalogButton;