const API = 'http://localhost:1452'
const category_path = '/api/category/'
const products_path = '/api/products/'

function buildPath(target) {
    return API.concat('/', target)
}

async function getCategory(id) {
    const remote = API.concat('', `${category_path}${id}`)
    console.info(remote)
    const response = await fetch(remote)
    return response.json();
}

async function getProduct(id) {
    const response = await fetch(API.concat('', `${products_path}${id}`))
    return response.json();
}

export {buildPath, getCategory, getProduct};
