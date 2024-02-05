import { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import FakeShopAPI from "../../../services/dummy-shop-api";
import SearchResult from "./SearchResult";
import { useNavigate } from "react-router-dom";



const fakeShopAPI = new FakeShopAPI();

function SearchArea() {
    const [searchValue, setSearchValue] = useState('');
    const [fetchedProducts, setFetchedProducts] = useState([]);

    const navigate = useNavigate();

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

    const handleSubmit = (event) => {
        event.preventDefault();
        clearFetchedData();
        navigate('/search?q=' + searchValue);
    }

    return (
        <div className="header__search-area" onMouseLeave={clearFetchedData}>
            <form className="header__search-form" onSubmit={handleSubmit}>
                <input className="header__search-input"
                    value={searchValue}
                    name="q"
                    placeholder="Search"
                    onClick={fetchProducts}
                    onChange={handleSearchInput}
                />

                <button className="header__search-btn" type="submit"><CiSearch className="icon-search" /></button>
                {
                    fetchedProducts.length > 0
                        ? <SearchResult products={fetchedProducts} handleItemClick={clearFetchedData}/>
                        : null
                }
            </form>
        </div>
    );
}

export default SearchArea;