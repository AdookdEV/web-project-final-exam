import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FakeShopAPI from "../../services/dummy-shop-api";
import { CartContext } from "../../context/CartContext";

import ICONS from "../../util/icons";
import './style.css';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [cartItemsNumber, setCartItemsNumber] = useState(0);
    const { cartItems, setCartItems } = useContext(CartContext);

    useEffect(() => {
        const api = new FakeShopAPI();
        api.getProductById(Number(productId))
            .then(d => {
                setProduct(d);
            })
            .catch(error => {
                console.error(error.message);
            });
    }, [productId]);

    useEffect(() => {
        setCartItemsNumber(cartItems.filter(p => p.id === Number(productId)).length);
    }, [cartItems, productId]);

    const handleAddCart = () => {
        setCartItems([
            ...cartItems,
            product
        ]);
    }

    const handleRemoveCart = () => {
        const copies = cartItems.filter(p => p.id === Number(productId));
        const without = cartItems.filter(p => p.id !== Number(productId));
        setCartItems([
            ...without,
            ...copies.slice(1)
        ]);
    }

    if (!product) return null;
    return (
        <div className="product container-lg">
            <div className="product__content">
                <h2>{product.title}</h2>
                <hr />
                <div className="product__info">
                    <div className="product__area-image"><img src={product.imageUrl} alt={product.title} /></div>
                    <div className="product__area-desc">
                        <h4>Description</h4>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className="product__area-buy">
                        <div className="product__buy">
                            <div>{product.price} $</div>
                            <div className="product__buy-controls">
                                {
                                    cartItemsNumber > 0
                                        ?
                                        <div className="product__cart-counters">
                                            <button className="buy-control__counter" onClick={handleRemoveCart}>-</button>
                                            <div className="buy-control__detail">{cartItemsNumber} items in cart</div>
                                            <button className="buy-control__counter" onClick={handleAddCart}>+</button>
                                        </div>
                                        :
                                        <button className="button product__cart-btn" onClick={handleAddCart}>Add to cart <span>{ICONS.CART}</span> </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;