import './style.css';
import { CategoryCollectionItem } from './CategoryCollectionItem';


function CategoryCollection({categories, handleCategoryClick}) {
    return (
        <div className="header__collection-content">
            {
                categories.map(c => <CategoryCollectionItem key={c.id} categoryData={c} handleCategoryClick={handleCategoryClick}/>)
            }
        </div>
    );
}

export default CategoryCollection;