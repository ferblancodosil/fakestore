import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export const APP_MUTATIONS = {
  CHANGE_SHOPPING_NUMBER: 'CHANGE_SHOPPING_NUMBER'
}

export const APP_GETTERS = {
}

export const APP_ACTIONS = {
  UPDATE_SHOPPING_CART: 'UPDATE_SHOPPING_CART',
  REFRESH_SHOPPING_CART: 'REFRESH_SHOPPING_CART'
}

const store = {
  state: {
    shoppingCartItems: [],
    user: {
      email: 'john@gmail.com',
      id: 1,
      name: {
        firstname: 'john',
        lastname: 'doe'
      },
      username: 'johnd'
    }
  },
  getters: {
  },
  mutations: {
    [APP_MUTATIONS.CHANGE_SHOPPING_NUMBER](state, { items = [] } = {}) {
      Vue.set(state, 'shoppingCartItems', items)
    }
  },
  actions: {
    async [APP_ACTIONS.UPDATE_SHOPPING_CART]({ commit, state }, { item }) {
      const results = _.cloneDeep(state.shoppingCartItems)
      const foundElement = results.findIndex(e => e.id === item.id)
      if (foundElement === -1 && item.quantity > 0) {
        results.push(item)
      } else if (item.quantity === 0) {
        results.splice(foundElement, 1)
      } else {
        results[foundElement].quantity += item.quantity
      }
      await Vue.prototype.$services.store.updateElementCart(item)
      // como la api no hace nada vamos a actualizar los datos del storage para ver algo
      commit(APP_MUTATIONS.CHANGE_SHOPPING_NUMBER, { items: results })
      return results
    },
    async [APP_ACTIONS.REFRESH_SHOPPING_CART]({ commit }) {
      const shoppingCartElements = await Vue.prototype.$services.store.getShoppingCart()
      commit(APP_MUTATIONS.CHANGE_SHOPPING_NUMBER, { items: shoppingCartElements })
    }
  }
}

export default new Vuex.Store(store)
