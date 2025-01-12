const endpoint = 'http://localhost:1452'
const target_category = '/api/category/'
const target_subcategory = '/api/subcategory/'
const target_products = '/api/products/'

function buildPath(target) {
    let ep = endpoint
    return ep.concat('/', target)
}

async function getCategory(id) {
    let ep = endpoint
    const remote = ep.concat('', `${target_category}${id}`)
    console.log(remote)
    const response = await fetch(remote)
    return response.json();
}

async function getProduct(id) {
    let ep = endpoint
    const response = await fetch(ep.concat('', `${target_products}${id}`))
    return response.json();
}

export {buildPath, getCategory, getProduct};
