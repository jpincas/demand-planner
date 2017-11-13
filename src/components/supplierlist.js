import { h } from "hyperapp";
import { router, Link } from "@hyperapp/router";

// Actions

const actions = {
  getSuppliers: (state, { supplierList }) =>
    fetch("/suppliers.json")
      .then(data => data.json())
      .then(ps => supplierList.setSuppliers(ps)),

  setSuppliers: function(state, actions, ps) {
    return { suppliers: ps };
  }
};

// Render

const SupplierList = ({ suppliers, actions }) => (
  <div class="supplierlist-container">
    <ul class="supplierlist-list">
      {suppliers.map(({ name, id }) => (
        <li class="supplierlist-list-item">
          <Link to={"/suppliers/" + id} go={actions.router.go}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export { SupplierList, actions };
