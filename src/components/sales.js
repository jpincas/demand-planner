import { h } from "hyperapp";
import { aggregateSales } from "../tools/calc";

// Actions

const actions = {
  getSales: (state, { salesActions }) =>
    fetch("/sales.json")
      .then(data => data.json())
      .then(function(data) {
        //For now, hard code the transformation from daily to weekly sales
        for (var product in data) {
          data[product] = aggregateSales(data[product], 7);
        }
        salesActions.setSales(data);
      }),
  setSales: function(state, actions, data) {
    return { sales: data };
  }
};

// Render

const Sales = ({ productSales }) => (
  <div class="saleslist-container">
    <table class="saleslist-table">
      {productSales.map(({ product, sales }) => (
        <tr class="saleslist-table-row">
          <td class="saleslist-table-rowhead">{product}</td>
          {sales.map(unitsSold => <td class="saleslist-cell">{unitsSold}</td>)}
        </tr>
      ))}
    </table>
  </div>
);

// Controller

const maybeRenderSales = function(maybeSupplierId, products, sales) {
  if (maybeSupplierId) {
    let productSales = products
      .filter(({ supplier }) => supplier == maybeSupplierId)
      .map(function(p) {
        return { product: p.id, sales: sales[p.id] || [] };
      });

    return Sales({ productSales });
  }
};

export { Sales, maybeRenderSales, actions };
