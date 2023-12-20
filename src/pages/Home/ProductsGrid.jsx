import ProductCard from './ProductCard';

const ProductsGrid = ({ className, productsData, onAddFavouriteProduct, onRemoveFavouriteProduct, }) => {
    return (
        <div className={`products-grid-content ${className}`}>
            {
                productsData.map((p) =>
                    <div className="products-grid__item" key={p.id}>
                        <ProductCard
                            productData={p}
                            onAddFavouriteProduct={onAddFavouriteProduct}
                            onRemoveFavouriteProduct={onRemoveFavouriteProduct} />
                    </div>)
            }
        </div>
    );
};

export default ProductsGrid;