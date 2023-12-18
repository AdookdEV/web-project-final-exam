import { ControllButton } from './ControllButton';
import './style.css';


function ControllArea() {
    return (
        <div className="header__controls-area">
            <ControllButton className="header__cabinet" text="Profile" iconName="user" url="/"/>
            <ControllButton text="Compare" iconName="compare" url="/compares"/>
            <ControllButton text="Favourites" iconName="favourite" url="/favourites"/>
            <ControllButton text="Cart" iconName="cart" url="/cart_items"/>
        </div>
    );
}

export default ControllArea;