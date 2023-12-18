import { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import FakeShopAPI from "../../../services/dummy-shop-api";
import SearchResult from "./SearchResult";


const fakeShopAPI = new FakeShopAPI();

function SearchArea() {
    const [searchValue, setSearchValue] = useState('');
    const [fetchedProducts, setFetchedProducts] = useState([]);

    const fetchProducts = useCallback(() => {
        fakeShopAPI.filterProductsByTitle(searchValue)
            // .then(r => r.json())
            .then(data => {
                setFetchedProducts(data);
            })
            .catch(e => console.error(e));
    }, [searchValue]);

    useEffect(() => {
        if (searchValue === '') return;
        fetchProducts();
    }, [fetchProducts, searchValue]);

    

    const clearFetchedData = () => {
        setFetchedProducts([]);
    }

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="header__search-area" onMouseLeave={clearFetchedData}>
            <form className="header__search-form" method="get" action="/search">
                <input className="header__search-input"
                    name="q"
                    placeholder="Search"
                    onClick={fetchProducts}
                    onChange={handleSearchInput}
                />

                <button className="header__search-btn" type="submit"><CiSearch className="icon-search" /></button>
                {
                    fetchedProducts.length > 0
                        ? <SearchResult products={fetchedProducts} />
                        : null
                }
            </form>
        </div>
    );
}

export default SearchArea;