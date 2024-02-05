export async function login(email, password) {
    const body = {
        username: email,
        password: password
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body)
    };

    return fetch('https://fakestoreapi.com/auth/login', options);
}

export async function register(email, password, fullname) {
    const body = {
        email: email,
        username: email,
        password: password,
        name: {
            firstname: fullname
        }
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body)
    };

    return fetch('https://fakestoreapi.com/users', options);
}

export async function getAllCategories() {
    return fetch('https://fakestoreapi.com/products/categories');
}

export async function getProduct(productId) {
    return fetch(`https://fakestoreapi.com/products/${productId}`);
}

export async function getUserCart(cartId) {
    return fetch(`https://fakestoreapi.com/carts/${cartId}`);
}

async function main() {
    const email = "test@test.com";
    const password = "1234";
    const fullname = "Bob Smith";
    const res = await register(email, password, fullname);
    console.log(await res.json());
}


main();

