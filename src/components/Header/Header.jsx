import { Link } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
import { useState } from 'react';

import CatalogButton from './CatalogButton';
import SearchArea from './SearchArea';
import ControllArea from './ControllArea';
import CategoryCollection from './CategoryCollection';
import CategoryMenu from './CategoryMenu';


import './style.css';


function Header({ categories, favouriteProducts }) {
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

              <ControllArea favouriteProducts={favouriteProducts}/>

              {
                showCatalog ?
                  <div className="header__collection">
                    <CategoryCollection categories={categories} handleCategoryClick={() => setShowCatalog(false)}/>
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