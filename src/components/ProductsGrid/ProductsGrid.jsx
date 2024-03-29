import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AlertMessagesContext } from "../../context/AlertMessagesContext";
import { createAlertMessage } from "../../util/alert-message";
import ICONS from "../../util/icons";

import './style.css'


const isFav = (product) => {
    if (product === null) {
        throw new Error("Can't process null");
    }
    const res = localStorage.getItem('favouriteProducts');
    if (res === null || res.length === 0) return false;
    const products = JSON.parse(res);
    return products.filter((p) => p.id === product.id).length !== 0;
};

const ProductCard = ({ productData, onAddFavouriteProduct, onRemoveFavouriteProduct }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { alertMessages, setAlertMessages } = useContext(AlertMessagesContext);
    
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const [inFavourites, setInFavourites] = useState(isFav(productData));

    useEffect(() => {
        setCartItemsNumber(cartItems.filter(p => p.id === productData.id).length);
    }, [cartItems, productData]);

    const handleFavouriteClick = () => {
        if (inFavourites) {
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("Product was removed from favourites", false)
            ]);
            onRemoveFavouriteProduct(productData);
        } else {
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("✔ Product was added to favourites", false)
            ]);
            onAddFavouriteProduct(productData);
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

    return (
        <div className="product-card">
            <div className="product-card__content">
                <div className="product-card__photo-area">
                    <Link to={`/product/${productData.id}`}>
                        <img className="product-card__img" src={productData.imageUrl} alt={productData.title} />
                    </Link>
                </div>
                <div className="product-card__title-area"><Link to={`/product/${productData.id}`} >{productData.title}</Link></div>
                <div className="product-card__controls-area">
                    <div className="product-card__fav-btn">
                        <button
                            className={inFavourites ? "product-card__fav-btn--favourite" : ""}
                            onClick={handleFavouriteClick}>
                            {inFavourites ? ICONS.HEART_FILL : ICONS.HEART}
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

const ProductsGrid = ({ className, productsData, onAddFavouriteProduct, onRemoveFavouriteProduct, }) => {
    return (
        <div className={`products-grid-content ${className}`}>
            {
                productsData.map((p) =>
                    <div className="products-grid__item" key={p.id}>
                        <ProductCard
                            productData={p}
                            onAddFavouriteProduct={onAddFavouriteProduct}
                            onRemoveFavouriteProduct={onRemoveFavouriteProduct} />
                    </div>)
            }
        </div>
    );
};

export default ProductsGrid;