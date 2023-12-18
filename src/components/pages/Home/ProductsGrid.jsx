import ProductCard from './ProductCard';
import './style.css';

const ProductsGrid = ({ className, productsData }) => {
    return (
        <div className={`products-grid-content ${className}`}>
            {
                productsData.map((p) => 
                    <div className="products-grid__item" key={p.id}><ProductCard productData={p} /></div>)
            }
        </div>
    );
};

export default ProductsGrid;