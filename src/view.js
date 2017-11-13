import { h } from "hyperapp";
import { router, Link } from "@hyperapp/router";
import { ProductList } from "./components/productlist";
import { SupplierList } from "./components/supplierlist";
import { NavTabs } from "./components/navtabs";
import { TopBar } from "./components/topbar";
import { maybeRenderSales } from "./components/sales";
// import { SalesChart } from "./components/saleschart";

export const view = [
  ["/products", (state, actions) => renderProductRoute(state, actions)],
  ["/suppliers", (state, actions) => renderSupplierRoute(state, actions)],
  [
    "/suppliers/:supplierId",
    (state, actions) => renderSupplierRoute(state, actions)
  ]
];

const renderProductRoute = (state, actions) =>
  renderMainView(state, actions, <ProductList products={state.products} />);

const renderSupplierRoute = (state, actions) =>
  renderMainView(
    state,
    actions,
    <SupplierList suppliers={state.suppliers} actions={actions} />
  );

const renderMainView = (state, actions, leftSidebarRenderer) => (
  <div id="view-container">
    <div id="configsidebar-container">
      <TopBar getdata={actions.topBar.getData}>Top Bar</TopBar>
    </div>
    <div id="leftsidebar-container">
      <NavTabs>
        <Link to="/suppliers" go={actions.router.go}>
          Supplers
        </Link>
        <Link to="/products" go={actions.router.go}>
          Products
        </Link>
      </NavTabs>
      {leftSidebarRenderer}
    </div>
    <div id="content-container">
      <div id="topcontent-container">{/* <SalesChart /> */}</div>
      <div id="bottomcontent-container">
        {maybeRenderSales(
          state.router.params["supplierId"],
          state.products,
          state.sales
        )}
      </div>
    </div>
    <div id="rightsidebar-container">Right content</div>
  </div>
);
