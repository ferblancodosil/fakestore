import { BASE_URL } from '@/enviroment/services.enviroment'
import Store from '@/store'
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

const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`)
  const products = await validateResponse(response)
  return products
}

const getProduct = async (productId) => {
  const response = await fetch(`${BASE_URL}/products/${productId}`)
  const product = validateResponse(response)
  return product
}

const getShoppingCartElements = async () => {
  const response = await fetch(`${BASE_URL}/carts/user/${validateUser()}?startdate=${cartDate}`)
  const elements = await validateResponse(response)
  return elements.length === 0 ? 0 : elements[0].products.length
}

const getShoppingCart = async () => {
  const response = await fetch(`${BASE_URL}/carts/user/${validateUser()}?startdate=${cartDate}`)
  const elements = await validateResponse(response)
  if (elements.length === 0) {
    return []
  }
  const promises = elements[0].products.map(async (product) => {
    const detail = await getProduct(product.productId)
    detail.quantity = product.quantity
    return detail
  })
  const valores = await Promise.all(promises)
  return valores
}

export default {
  getAllProducts,
  getProduct,
  getShoppingCartElements,
  getShoppingCart
}
