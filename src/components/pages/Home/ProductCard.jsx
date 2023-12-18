import { Link } from "react-router-dom";
import ICONS from "../../../util/icons";
import { useState } from "react";


const ProductCard = ({ productData }) => {
    const [inFavourites, setInFavourites] = useState(false);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    const handleFavouriteClick = () => {
        setInFavourites(!inFavourites);
    };

    const handleCartLick = () => {
        setCartItemsNumber(cartItemsNumber + 1);
    };

    return (
        <div className="product-card">
            <div className="product-card__content">
                <div className="product-card__photo-area">
                    <Link>
                        <img className="product-card__img" src={productData.imageUrl} alt={productData.title} />
                    </Link>
                </div>
                <div className="product-card__title-area"><Link>{productData.title}</Link></div>
                <div className="product-card__controls-area">
                    <div className="product-card__fav-btn">
                        <button
                            className={inFavourites ? "product-card__in-fav" : ""}
                            onClick={handleFavouriteClick}>
                            {inFavourites ? ICONS.HEART_FILL : ICONS.HEART}
                        </button>
                    </div>
                    <div className="product-card__compare-btn">
                        <button>
                            {ICONS.COMPARE}
                        </button>
                    </div>
                    <div className="product-card__cart-btn">
                        <button onClick={handleCartLick}>
                            {
                                cartItemsNumber > 0 ? "+1" : ICONS.CART
                            }
                        </button>
                        {
                            cartItemsNumber > 0 ? <span className="cart-number-indicator number-indicator">{cartItemsNumber}</span> : null
                        }
                        
                    </div>
                </div>
                <div className="product-card__bottom-area">
                    <div className="product-car__price">
                        <span className="product-car__price-curr">{productData.price} $</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;