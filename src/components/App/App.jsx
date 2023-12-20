import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CartContext } from '../../context/CartContext';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import Feedback from '../../pages/FeedBack';
import Login from '../../pages/Login';
import Favourite from '../../pages/Favourite/Favourite';
import Registeration from '../../pages/Registeration/Registration';

import FakeShopAPI from '../../services/dummy-shop-api';
import './style.css';
import { AlertMessagesContext } from '../../context/AlertMessagesContext';
import AlertBox from '../AlertBox';
import { useLocalStorage } from '@uidotdev/usehooks';
import CartPage from '../../pages/CartPage/CartPage';
import ProductPage from '../../pages/ProductPage/ProductPage';


function App() {
    const [categories, setCategories] = useState([]);
    const [onLoading, setOnLoading] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const [alertMessages, setAlertMessages] = useState([]);
    const [favouriteProducts, setFavouriteProducts] = useLocalStorage("favouriteProducts", []);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        const shopApi = new FakeShopAPI();
        setOnLoading(true);
        shopApi.getAllCategories()
            // .then(r => r.json())
            .then(data => {
                setOnLoading(false);
                setCategories(data);
            })
            .catch(e => console.error(e));
    };

    const addFavouriteProduct = (product) => {
        setFavouriteProducts([
            ...favouriteProducts,
            product
        ]);
    };

    const removeFavouriteProduct = (product) => {
        setFavouriteProducts(favouriteProducts.filter(p => p.id !== product.id));
    };

    return (
        <div className="page-layout">
            {
                onLoading
                    ? (<p>Loading...</p>)
                    : (
                        <AlertMessagesContext.Provider value={{ alertMessages, setAlertMessages }}>
                            <CartContext.Provider value={{ cartItems, setCartItems }}>
                                <Header categories={categories} cartItems={cartItems} favouriteProducts={favouriteProducts} />
                                <main>
                                    <Routes>
                                        <Route index element={
                                            <Home favouriteProducts={favouriteProducts}
                                                onAddFavouriteProduct={addFavouriteProduct}
                                                onRemoveFavouriteProduct={removeFavouriteProduct} />}>
                                        </Route>

                                        <Route path='/product/:productId' element={<ProductPage />}></Route>
                                        <Route path='/category/:categoryName' element={<h1>Category page</h1>}></Route>
                                        <Route path='/client_account/login' element={<Login />}></Route>
                                        <Route path='/client_account/register' element={<Registeration />}></Route>
                                        <Route path='/client_account/addresses' element={<h1>Account page</h1>}></Route>
                                        <Route path='/search' element={<h1>Search page</h1>}></Route>
                                        <Route path='/cart_items' element={
                                            <CartPage
                                                onAddFavouriteProduct={addFavouriteProduct}
                                                onRemoveFavouriteProduct={removeFavouriteProduct} />}>
                                        </Route>

                                        <Route path='/favourites' element={
                                            <Favourite favouriteProducts={favouriteProducts}
                                                onAddFavouriteProduct={addFavouriteProduct}
                                                onRemoveFavouriteProduct={removeFavouriteProduct} />}>
                                        </Route>

                                        <Route path='/page/feed_back' element={<Feedback />}></Route>
                                    </Routes>
                                </main>
                                <Footer />
                                <AlertBox />
                            </CartContext.Provider>
                        </AlertMessagesContext.Provider>
                    )
            }
        </div>
    );
}

export default App;
