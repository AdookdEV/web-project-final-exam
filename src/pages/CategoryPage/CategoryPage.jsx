import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FakeShopAPI from "../../services/dummy-shop-api";

import './style.css';
import ProductsGrid from "../../components/ProductsGrid";

const api = new FakeShopAPI();

const CategoryPage = ({ onAddFavouriteProduct, onRemoveFavouriteProduct }) => {
    const { categoryId } = useParams();
    const [categoryData, setCategoryData] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.getCategoryById(Number(categoryId))
            // .then(r => r.json())
            .then(r => {
                if (r.success) {
                    setCategoryData(r.data);
                } else {
                    console.error(r.message);
                }

            })
    }, [categoryId]);

    useEffect(() => {
        api.getProductsByCategoryId(Number(categoryId))
            // .then(r => r.json())
            .then(r => {
                if (r.success) {
                    setProducts(r.data);
                } else {
                    console.error(r.message);
                }
            });
        ;
    }, [categoryId]);

    return (
        <div className="category-page container-lg">
            <div className="category__content">
                <div className="category__page-layout">
                    <h1 className="category__title">{categoryData.title}</h1>
                    {
                        products.length > 0 ? <ProductsGrid productsData={products}
                            onAddFavouriteProduct={onAddFavouriteProduct}
                            onRemoveFavouriteProduct={onRemoveFavouriteProduct} />
                            : <p>No products yet in this category</p>
                    }

                </div>
            </div>
        </div>
    );
}

export default CategoryPage;