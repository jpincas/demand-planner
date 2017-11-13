import { h } from 'hyperapp'

// Actions

const actions = {
    getProducts: (state, { productList }) => (
        fetch('/products.json')
            .then((data) => data.json())
            .then((ps) =>
                productList.setProducts(ps))
    ),
    setProducts: function (state, actions, ps) {
        return { products: ps }
    }
}

// Render

const ProductList = ({ products }) => (
    <div class="productlist-container">
        <h1>Products</h1>
        <ul>
            {products.map(({ name, id }) => <li>{name}, {id}</li>)}
        </ul>
    </div>
)

export { ProductList, actions }