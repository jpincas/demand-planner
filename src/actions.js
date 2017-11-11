import { actions as productListActions } from './components/productlist'
import { actions as supplierListActions } from './components/supplierlist'
import { actions as topBarActions } from './components/topbar'


const actions = {
  productList: productListActions,
  supplierList: supplierListActions,
  topBar: topBarActions
}

export default actions
