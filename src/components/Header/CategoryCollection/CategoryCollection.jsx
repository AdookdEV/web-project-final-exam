import './style.css';
import { CategoryCollectionItem } from './CategoryCollectionItem';


function CategoryCollection({categories}) {
    return (
        <div className="header__collection-content">
            {
                categories.map(c => <CategoryCollectionItem key={c.id} categoryData={c} />)
            }
        </div>
    );
}

export default CategoryCollection;