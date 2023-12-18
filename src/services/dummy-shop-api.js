export default class FakeShopAPI {
    _categories = [
        {
            id: 1,
            name: "Smartphones and Tablets",
            image: "images/medium_01.jpg"
        },
        {
            id: 2,
            name: "Laptops and computers",
            image: "images/medium_03.jpg"
        },
        {
            id: 3,
            name: "Devices for home",
            image: "images/medium_06.jpg"
        },
        {
            id: 4,
            name: "Entertainment",
            image: "images/medium_07.jpg"
        },
        {
            id: 5,
            name: "TVs, Audio-video, Hi-Fi",
            image: "images/medium_05.jpg"
        },
        {
            id: 6,
            name: "Household appliances for the kitchen",
            image: "images/medium_02.jpg"
        },
        {
            id: 7,
            name: "Beauty and health",
            image: "images/medium_08.jpg"
        },
        {
            id: 8,
            name: "Photo and video equipment",
            image: "images/medium_04.jpg"
        },
    ];

    _users = [

    ];

    _products = [
        
    ];

    getAllCategories = async () => {
        return this._categories;
    };

    getCategoryById = async (id) => {
        for (let category of this._categories) {
            if (category.id === id) {
                return category;
            }
        }
        return this._categories;
    };

    getProductById = (id) => {
        for (let prod of this._products) {
            if (prod.id === id) {
                return prod;
            }
        }
    };

    getProductsByCategoryId = async (catId) => {
        let res = [];
        for (let product of this._products) {
            if (product.category.id === catId) {
                res.append(product);
            }
        }
        return this.res;
    };

    filterProductsByTitle = (title) => {
        title = title.trim().toLowerCase();
        return this._products.filter(p => p.name.startswith(title));
    }
}
