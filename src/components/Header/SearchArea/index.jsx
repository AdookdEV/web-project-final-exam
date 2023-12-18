import { CiSearch } from "react-icons/ci";


function SearchArea() {
    return (
        <div className="header__search-area">
            <form className="header__search-form" method="get" action="/search">
                <input className="header__search-input" name="q" placeholder="Search" />
                <button className="header__search-btn"><CiSearch className="icon-search" /></button>
                <div className="header__search-results"></div>
            </form>
        </div>
    );
}

export default SearchArea;