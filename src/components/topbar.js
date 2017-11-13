import { h } from 'hyperapp'

const actions = {
    getData: function (state, actions) {
        actions.productList.getProducts(state, actions)
        actions.supplierList.getSuppliers(state, actions)
        actions.salesActions.getSales(state, actions)
    }
}

const TopBar = ({ getdata }, children) => (
    <div id="topbar-container">
        <button class="topbar-getdata-button" onclick={getdata} >
            Get Products
        </button>
        {children}
    </div>
)

export { TopBar, actions }