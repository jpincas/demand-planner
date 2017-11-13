import { actions as productListActions } from './components/productlist'
import { actions as supplierListActions } from './components/supplierlist'
import { actions as topBarActions } from './components/topbar'
import { actions as salesActions } from './components/sales'


const actions = {
  productList: productListActions,
  supplierList: supplierListActions,
  topBar: topBarActions,
  salesActions: salesActions
}

export default actions
