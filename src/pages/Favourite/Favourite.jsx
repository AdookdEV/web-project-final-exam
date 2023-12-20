import { useEffect } from "react";
import ProductsGrid from "../../components/ProductsGrid";

const Favourite = ({ favouriteProducts, onAddFavouriteProduct, onRemoveFavouriteProduct }) => {
    useEffect(() => {
        document.title = "Favourites";
    }, [])
    return (
        <div className="favourite container-lg">
            <div className="favourite__content">
                <h2>Favourites</h2>
                {
                    favouriteProducts.length === 0
                        ? <div className="empty-catalog-message" >No products yet</div>
                        : <ProductsGrid productsData={favouriteProducts}
                            onAddFavouriteProduct={onAddFavouriteProduct}
                            onRemoveFavouriteProduct={onRemoveFavouriteProduct}/>
                }
            </div>
        </div>
    );
};

export default Favourite;