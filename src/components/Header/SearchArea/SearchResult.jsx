import { Link } from "react-router-dom";

const SearchResult = ({ products, onLeave, handleItemClick }) => {
    return (
        <ul className="header__search-result" onMouseLeave={onLeave}>
            {
                products.map((p, i) => {
                    if (i >= 10) return null;
                    return (
                        <li key={p.id} >
                            <Link to={`/search?q=${p.title}`} onClick={handleItemClick}>{p.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
};


export default SearchResult;