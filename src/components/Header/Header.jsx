import { Link } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
import { useState } from 'react';

import SearchArea from './SearchArea';
import CategoryMenu from './CategoryMenu';
import CatalogButton from './CatalogButton';
import ControllArea from './ControllArea';
import CategoryCollection from './CategoryCollection';

import './style.css';


function Header({ categories }) {
  const [showCatalog, setShowCatalog] = useState(false);
  

  const handleCategoryClick = () => {
    setShowCatalog(!showCatalog);
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__top-inner container-lg">
            <ul className="header__menu">
              <li className="header__menu-item">
                <Link to="/page/delivery-and-payment">Delivery and payment</Link>
              </li>
              <li className="header__menu-item">
                <Link to="/page/pickup-location">Pickup points</Link>
              </li>
              <li className="header__menu-item">
                <Link to="/page/feed_back">Support</Link>
              </li>
            </ul>
            <div className="header__phone">
              <a className="header__phone-value" href="tel: +77775552233">
                <FiPhone className="icon-phone" /> +7(777)5552233
              </a>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container-lg">
            <div className="header-main__inner">
              <div className="header__logo-area">
                <Link className="header__logo" to="/">
                  <img src="/images/fine_logo.png" alt="Online Shop" />
                </Link>
              </div>

              <div className="header__catalog-area">
                <CatalogButton onClick={handleCategoryClick} catalogShow={showCatalog}>Catalog</CatalogButton>
              </div>

              <SearchArea />

              <ControllArea />

              {
                showCatalog ?
                  <div className="header__collection">
                    <CategoryCollection categories={categories} />
                  </div>
                  : null
              }
            </div>
          </div>

        </div>

        <CategoryMenu categories={categories} />
      </header>
      {
        showCatalog ? <div className="shadow" onClick={() => setShowCatalog(false)}></div> : null
      }
    </>
  );
}

export default Header;