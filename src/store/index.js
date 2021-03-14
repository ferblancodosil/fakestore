import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const APP_MUTATIONS = {
  CHANGE_SHOPPING_NUMBER: 'CHANGE_SHOPPING_NUMBER'
}

export const APP_GETTERS = {
}

export const APP_ACTIONS = {
  ADD_SHOPPING_CART: 'ADD_SHOPPING_CART',
  REFRESH_SHOPPING_CART: 'REFRESH_SHOPPING_CART'
}

const store = {
  state: {
    shoppingCartItems: 0,
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
    [APP_MUTATIONS.CHANGE_SHOPPING_NUMBER](state, { items = 0 } = {}) {
      Vue.set(state, 'shoppingCartItems', items)
    }
  },
  actions: {
    async [APP_ACTIONS.ADD_SHOPPING_CART]({ commit }, item = {}) {
      const results = []
      results.push(item)
      commit(APP_MUTATIONS.CHANGE_SHOPPING_NUMBER, { items: results.length })
      return results
    },
    async [APP_ACTIONS.REFRESH_SHOPPING_CART]({ commit }) {
      const shoppingCartElements = await Vue.prototype.$services.store.getShoppingCartElements()
      commit(APP_MUTATIONS.CHANGE_SHOPPING_NUMBER, { items: shoppingCartElements })
    }
  }
}

export default new Vuex.Store(store)
