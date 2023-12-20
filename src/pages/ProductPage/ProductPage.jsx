import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FakeShopAPI from "../../services/dummy-shop-api";

const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const api = new FakeShopAPI();
        api.getProductById(searchParams.get("id"))
        .then(d => {
            setProduct(d);
        })
        .catch(error => {
            console.log(error);
        });
    },[searchParams]);

    return (
        <div className="product container-lg">
            <div className="product__content">
                <hr />
                <h2>Product Title</h2>
                <div className="product__info">
                    <div className="product__area-desc">Product description</div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;