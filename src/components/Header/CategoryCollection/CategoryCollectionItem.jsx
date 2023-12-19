import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export const CategoryCollectionItem = ({ categoryData }) => {
    const [showAll, setShowAll] = useState(false);

    const handleChange = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="header__collection-item">
            <Link className="header__collection-img-title" to={`/category/${categoryData.id}`}>
                <img className="header__collection-img" src={categoryData.image} alt={categoryData.title} />
                <span>{categoryData.title}</span>
            </Link>
            <ul className="header__collection-controlls">
                {   
                    categoryData.subCategories.map((c, i) => {
                        const isHide = !showAll && i >= 5;
                        return (
                            <li className={isHide ? "is-hide" : ""} key={c.id}>
                                <Link to={`/category/${c.id}`}>{c.title}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            {
                categoryData.subCategories.length > 5
                    ?
                    <div className="header__collection-show-more" onClick={handleChange}>
                        {showAll ? "Hide" : "Show all"}
                        {showAll ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </div>
                    :
                    null
            }
        </div>
    );
};