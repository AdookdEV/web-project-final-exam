import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ICONS from '../../util/icons';
import './style.css';
import { Link } from 'react-router-dom';
import { AlertMessagesContext } from '../../context/AlertMessagesContext';
import { createAlertMessage } from "../../util/alert-message";


const isFav = (product) => {
    if (product === null) {
        throw new Error("Can't process null");
    }
    const res = localStorage.getItem('favouriteProducts');
    if (res === null || res.length === 0) return false;
    const products = JSON.parse(res);
    return products.filter((p) => p.id === product.id).length !== 0;
};

const getUnique = (items) => {
    const res = [];
    const memo = new Set();
    items.forEach(p => {
        if (!memo.has(p.id)) {
            res.push(p);
        }
        memo.add(p.id);
    });
    return res;
};

const CartCounter = ({ count, product }) => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleAdd = () => {
        console.log("Add product to cart: " + product);
        setCartItems([...cartItems, product]);
    };

    const handleRemove = () => {
        const copy = [];
        let met = false;
        for (let p of cartItems) {
            if (p.id !== product.id) {
                copy.push(p);
                continue;
            }
            if (met) {
                copy.push(product);
            }
            met = true;
        }
        setCartItems(copy);
    };

    return (
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleRemove}>-</button>
        </div>
    );
};

const CartItemCard = ({ product, count, onRemoveFromCart, onRemoveFav, onAddFav }) => {

    const [inFavourites, setInFavourites] = useState(isFav(product));
    const { alertMessages, setAlertMessages } = useContext(AlertMessagesContext);
    const handleFavouriteClick = () => {
        setInFavourites(!inFavourites);
        if (!inFavourites) {
            onAddFav(product);
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("Added to favourites", false)
            ]);
        } else {
            onRemoveFav(product);
            setAlertMessages([
                ...alertMessages,
                createAlertMessage("Removed from favourites", false)
            ]);
        }
    };

    const isFavClass = inFavourites ? "cart-item--is-fav" : "";

    return (
        <div className="cart-item">
            <div className="cart-item__img"><img src={product.imageUrl} alt={product.title} /></div>
            <Link className="cart-item__title" to={`/product/${product.id}`} alt={product.title}>{product.title}</Link>
            <div className="cart-item__total">{product.price * count} $</div>
            <div className="cart-item__delete">
                <div className={isFavClass} onClick={handleFavouriteClick}>
                    <span>{ICONS.HEART}</span>
                    <span>Add to favorite</span>
                </div>
                <div onClick={(e) => onRemoveFromCart(product)}>
                    <span>{ICONS.TRASH}</span>
                    <span>Remove</span>
                </div>
            </div>
            <div className="cart-item__counter"><CartCounter count={count} product={product} /></div>
        </div>
    );
};


const CartControl = ({ cartItems, cartCount }) => {
    const getSum = () => {
        let s = 0;
        for (let p of cartItems) {
            s += p.price;
        };
        return s;
    };

    return (
        <div>
            <div>You have {cartCount} items in your cart </div>
            <div>Total: {getSum(cartCount)} $</div>
            <button className="button">Checkout</button>
        </div>
    )
};

const CartPage = ({ onAddFavouriteProduct, onRemoveFavouriteProduct }) => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemoveCartItem = (product) => {
        setCartItems(
            cartItems.filter(p => p.id !== product.id)
        );
    };

    const handleRemoveFavourite = (product) => {
        onRemoveFavouriteProduct(product);
    };

    const handleAddFavourite = (product) => {
        onAddFavouriteProduct(product);
    };

    return (
        <div className="cart-page container-lg">
            <div className="cart-page__content">
                <h3>Cart</h3>
                {
                    cartItems.length === 0
                        ? <p>Your cart is empty</p>
                        :
                        <div className="cart-page__layout">
                            <div className="cart-page__list">
                                {
                                    getUnique(cartItems.slice())
                                        .map(item => <CartItemCard
                                            key={item.id}
                                            count={cartItems.filter(i => i.id === item.id).length}
                                            product={item}
                                            onRemoveFromCart={handleRemoveCartItem}
                                            onRemoveFav={handleRemoveFavourite}
                                            onAddFav={handleAddFavourite} />)
                                }
                            </div>
                            <CartControl cartItems={cartItems} cartCount={cartItems.length} />
                        </div>
                }

            </div>
        </div>
    );
}

export default CartPage;