import { h } from 'hyperapp'

// Actions

const actions = {

    getSuppliers: ( state, { supplierList } ) => (
        fetch('/suppliers.json')
        .then((data) => data.json())
        .then((ps) => 
            supplierList.setSuppliers(ps)
        )
    ),

    setSuppliers: function(state, actions, ps){
        return { suppliers: ps }
    }
}

// Render

const SupplierList = ({ suppliers, getSuppliers }) => (
    <div class="supplierlist-container">
    <h1>Suppliers</h1>
        <ul>
        { suppliers.map(({name, id}) => <li>{ name }, { id }</li>) }
        </ul>
    </div>
)

export { SupplierList, actions }