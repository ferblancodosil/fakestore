import { create } from 'apisauce'
import { BASE_URL } from '@/enviroment/services.enviroment'
import store from './store.services'
import notification from './notification.services'

export const httpClient = create({
  baseURL: BASE_URL
})

export default {
  store,
  notification
}
