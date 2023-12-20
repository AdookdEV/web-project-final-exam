import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { ControllButton } from './ControllButton';
import './style.css';


function ControllArea({favouriteProducts}) {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="header__controls-area">
            <ControllButton className="header__cabinet" text="Profile" iconName="user" url="/client_account/login"/>
            <ControllButton text="Favourites" iconName="favourite" url="/favourites" indicatorNumber={favouriteProducts.length}/>
            <ControllButton text="Cart" iconName="cart" url="/cart_items" indicatorNumber={cartItems.length}/>
        </div>
    );
}

export default ControllArea;