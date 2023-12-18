const SearchResult = ({ products, onLeave }) => {
    return (
        <ul className="header__search-result" onMouseLeave={onLeave}>
            {
                products.map((p, i) => {
                    if (i >= 10) return null;
                    return (
                        <li key={p.id} >
                            <a href={`/search?q=${p.title}`}>{p.title}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
};


export default SearchResult;