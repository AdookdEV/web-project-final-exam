import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

import useMediaQuery from "../../../hooks/useMediaQuery";
import './style.css'


const CategoryDropDown = ({ categories, show, onMouseEnter, onMouseLeave, onCategoryClick }) => {
  if (!show) return null;
  return (
    <div className="header__category-drop-down"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul>
        {
          categories.map(c =>
            <li key={c.id}><Link to={`/category/${c.id}`} onClick={onCategoryClick}>{c.title}</Link></li>
          )
        }
      </ul>
    </div>
  );
};

function CategoryMenu({categories}) {
  const mdScreen = useMediaQuery("(min-width: 768px)");
  const smScreen = useMediaQuery("(min-width: 576px)");
  const xsScreen = useMediaQuery("(max-width: 576px)");
  const [showDropDown, setShowDropDown] = useState(false);
  const [displayedCategoryNumber, setDisplayedCategoryNumber] = useState(3);


  useEffect(() => {
    if (smScreen) {
      setDisplayedCategoryNumber(2);
    }
    if (mdScreen) {
      setDisplayedCategoryNumber(3);
    }
    if (xsScreen) {
      setDisplayedCategoryNumber(1);
    }
  }, [mdScreen, smScreen, xsScreen]);

  const handleShowDropDown = () => {
    setShowDropDown(true)
  };

  const handleHideDropDown = () => {
    setShowDropDown(false)
  };

  return (
    <div className="header__category-menu">
      <div className="header__category-menu-inner container-lg">
        <ul>
          { categories
                .slice(0, displayedCategoryNumber)
                .map((c, i) => (<li key={c.id} className="header__catgory-item"><Link to={`/category/${c.id}`}>{c.title}</Link></li>))
          }

          <div className="header__drop-down"
            onMouseEnter={handleShowDropDown}
            onMouseLeave={handleHideDropDown}
          >
            Other
            <IoIosArrowDown />
          </div>

          <CategoryDropDown categories={categories.slice(displayedCategoryNumber)}
              show={showDropDown}
              onMouseEnter={handleShowDropDown}
              onMouseLeave={handleHideDropDown}
              onCategoryClick={handleHideDropDown}/>
        </ul>
      </div>
    </div>
  );
}

export default CategoryMenu;