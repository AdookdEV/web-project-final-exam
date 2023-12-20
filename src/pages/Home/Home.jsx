import React, { useEffect, useState } from "react";
import './style.css';
import ProductsGrid from "../../components/ProductsGrid";

import FakeShopAPI from "../../services/dummy-shop-api";

const Home = ({favouriteProducts, onAddFavouriteProduct, onRemoveFavouriteProduct}) => {
  const [products, setProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    document.title = "My store";
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    let shopApi = new FakeShopAPI();
    setLoadingData(true);
    setTimeout(() => {
      shopApi.getAllProducts()
        // .then(r => r.json())
        .then(data => {
          setLoadingData(false);
          setProducts(data);
        })
        .catch(e => console.error(e));
    }, 1000);
  };

  return (
    <div className="products-grid-container container-lg" >
      {
        loadingData
          ? <div>Loading...</div>
          : <ProductsGrid
            className="content"
            productsData={products} 
            onAddFavouriteProduct={onAddFavouriteProduct} 
            onRemoveFavouriteProduct={onRemoveFavouriteProduct}/>
      }
    </div>
  )

};

export default Home;