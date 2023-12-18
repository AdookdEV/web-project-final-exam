import './style.css';
import { CategoryCollectionItem } from './CategoryCollectionItem';


const categories = [
    {
        id: 1,
        title: "Category 1",
        imgUrl: "/images/medium_01.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
            { id: 4, title: "Subcategory" },
        ]
    },
    {
        id: 2,
        title: "Category 2",
        imgUrl: "/images/medium_02.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
            { id: 4, title: "Subcategory" },
            { id: 5, title: "Subcategory" },
            { id: 6, title: "Subcategory" },
        ]
    },
    {
        id: 3,
        title: "Category 3",
        imgUrl: "/images/medium_03.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
        ]
    },
    {
        id: 4,
        title: "Category 3",
        imgUrl: "/images/medium_04.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
        ]
    },
    {
        id: 5,
        title: "Category 3",
        imgUrl: "/images/medium_05.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
        ]
    },
    {
        id: 6,
        title: "Category 3",
        imgUrl: "/images/medium_06.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
        ]
    },
    {
        id: 7,
        title: "Category 3",
        imgUrl: "/images/medium_07.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
        ]
    },
    {
        id: 8,
        title: "Category 3",
        imgUrl: "/images/medium_08.jpg",
        subCategories: [
            { id: 1, title: "Subcategory" },
            { id: 2, title: "Subcategory" },
            { id: 3, title: "Subcategory" },
        ]
    },
]

function CategoryCollection() {
    return (
        <div className="header__collection-content">
            {
                categories.map(c => <CategoryCollectionItem key={c.id} categoryData={c} />)
            }
        </div>
    );
}

export default CategoryCollection;