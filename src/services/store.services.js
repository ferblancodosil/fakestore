import { BASE_URL } from '@/enviroment/services.enviroment'
import Store from '@/store'
import _ from 'lodash'
import Notification from './notification.services'

const cartDate = '2020-03-02'// (new Date()).toISOString().split('T')[0]//

const validateResponse = async (response) => {
  if (!response.ok) {
    Notification.notify({ text: response.status })
    throw new Error()
  }
  const json = await response.json()
  return json
}

const validateUser = () => {
  if (Store.state.user === undefined) {
    Notification.notify({ text: 'Es necesario un usuario' })
    throw new Error()
  }
  return Store.state.user.id
}

const getUserCart = async () => {
  const response = await fetch(`${BASE_URL}/carts/user/${validateUser()}?startdate=${cartDate}`)
  const elements = await validateResponse(response)
  if (elements.length === 0) {
    throw new Error('Not created cart')
  }
  return _.cloneDeep(elements[0])
}

const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`)
  const products = await validateResponse(response)
  return products
}

const getProduct = async (productId) => {
  const response = await fetch(`${BASE_URL}/products/${productId}`)
  const product = await validateResponse(response)
  return product
}

const getShoppingCart = async () => {
  try {
    const elements = await getUserCart()
    const promises = elements.products.map(async (product) => {
      const detail = await getProduct(product.productId)
      detail.quantity = product.quantity
      return detail
    })
    const valores = await Promise.all(promises)
    return valores
  } catch (e) {
    console.error(e)
    return []
  }
}

const updateShoppingCart = async (products = []) => {
  const cart = await getUserCart()
  cart.products = products
  const response = await fetch(`${BASE_URL}/carts/${cart.id}`, {
    method: 'PUT',
    body: JSON.stringify(cart)
  })
  await validateResponse(response)
  return _.cloneDeep(products)
}

export default {
  getAllProducts,
  getProduct,
  getShoppingCart,
  updateShoppingCart
}
