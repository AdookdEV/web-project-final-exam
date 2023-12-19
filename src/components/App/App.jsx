import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../pages/Home';
import Feedback from '../pages/FeedBack';
import { CartContext } from '../../context/CartContext';

import FakeShopAPI from '../../services/dummy-shop-api';
import './style.css';
import { AlertMessagesContext } from '../../context/AlertMessagesContext';
import AlertBox from '../AlertBox';


function App() {
    const [categories, setCategories] = useState([]);
    const [onLoading, setOnLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [alertMessages, setAlertMessages] = useState([]);

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

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="page-layout">
            {
                onLoading
                    ? (<p>Loading...</p>)
                    : (
                        <AlertMessagesContext.Provider value={{ alertMessages, setAlertMessages }}>
                            <CartContext.Provider value={{ cartItems, setCartItems }}>
                                <Header categories={categories} cartItems={cartItems} />
                                <Routes>
                                    <Route index element={<Home />}></Route>
                                    <Route path='/product/:productId' element={<h1>Product page</h1>}></Route>
                                    <Route path='/category/:categoryName' element={<h1>Category page</h1>}></Route>
                                    <Route path='/client_account/orders' element={<h1>Orders page</h1>}></Route>
                                    <Route path='/client_account/addresses' element={<h1>Account page</h1>}></Route>
                                    <Route path='/client_account/contacts' element={<h1>Conctacts page</h1>}></Route>
                                    <Route path='/client_account/password/change' element={<h1>Change Password page</h1>}></Route>
                                    <Route path='/search' element={<h1>Search page</h1>}></Route>
                                    <Route path='/compares' element={<h1>Compares page</h1>}></Route>
                                    <Route path='/cart_items' element={<h1>Cart page</h1>}></Route>
                                    <Route path='/favourites' element={<h1>Favourites page</h1>}></Route>
                                    <Route path='/page/feed_back' element={<Feedback />}></Route>
                                    <Route path='/page/pickup-location' element={<h1>Pickup location page</h1>}></Route>
                                    <Route path='/page/delivery-and-payment' element={<h1>Delivery and Payment page</h1>}></Route>
                                </Routes>
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
