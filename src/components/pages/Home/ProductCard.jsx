import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../../context/CartContext";
import { AlertMessagesContext } from "../../../context/AlertMessagesContext";

import { createAlertMessage } from "../../../util/alert-message";
import ICONS from "../../../util/icons";


const ProductCard = ({ productData }) => {
    const [inFavourites, setInFavourites] = useState(false);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [inCompare, setInCompare] = useState(false);

    const { cartItems, setCartItems } = useContext(CartContext);
    const { alertMessages, setAlertMessages } = useContext(AlertMessagesContext);

    useEffect(() => {

    }, [inCompare])

    const handleFavouriteClick = () => {
        if (inFavourites) {
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("Product was removed from favourites", false)
            ]);
        } else {
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("✔ Product was added to favourites", false)
            ]);
        }
        setInFavourites(!inFavourites);
    };

    const handleCartLick = () => {
        setCartItemsNumber(cartItemsNumber + 1);
        setCartItems([
            ...cartItems,
            productData
        ]);
        if (cartItemsNumber === 0) {
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("✔ Product was added to cart", false)
            ]);
        }
    };

    const handleCompareClick = () => {
        if (inCompare) {
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("Product was removed from comapared products", false)
            ]);
        } else {
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("✔ Product was added to comapared products", false)
            ]);
        }
        setInCompare(!inCompare);
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
                            className={inFavourites ? "product-card__fav-btn--favourite" : ""}
                            onClick={handleFavouriteClick}>
                            {inFavourites ? ICONS.HEART_FILL : ICONS.HEART}
                        </button>
                    </div>
                    <div className="product-card__compare-btn">
                        <button
                            className={inCompare ? "product-card__compare-btn--compared" : ""}
                            onClick={handleCompareClick}>

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