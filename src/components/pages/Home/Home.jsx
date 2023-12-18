import React from "react";
import './style.css';
import ProductsGrid from "./ProductsGrid";

import FakeShopAPI from "../../../services/dummy-shop-api";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loadingData: false
        };
    }



    componentDidMount = () => {
        console.log("Fetch Data");
        this.fetchProducts();
    };

    fetchProducts = () => {
        let shopApi = new FakeShopAPI();
        this.setState({
            loadingData: true
        });
        setTimeout(() => {
            shopApi.getAllProducts()
                // .then(r => r.json())
                .then(data => this.setState({ products: data, loadingData: false }))
                .catch(e => console.error(e));
        }, 1000);

    };


    render() {
        return (
            <>
                <main className="products-grid-container container-lg" >
                    {
                        this.state.loadingData
                            ? <div>Loading...</div>
                            : <ProductsGrid className="content" productsData={this.state.products} />
                    }
                </main>
            </>
        )
    }
};


export default Home;