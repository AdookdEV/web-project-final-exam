import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import './style.css';
function App() {
    return (
        <div className="page-layout">
            <Header />
            <Routes>
                <Route index element={<h1>Main page</h1>}></Route>
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
                <Route path='/page/feed_back' element={<h1>Feedback page</h1>}></Route>
                <Route path='/page/pickup-location' element={<h1>Pickup location page</h1>}></Route>
                <Route path='/page/delivery-and-payment' element={<h1>Delivery and Payment page</h1>}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
