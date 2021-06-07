import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      token: null,
      cities: ['Нур-Султан', 'Алматы', 'Шымкент', 'Караганда', 'Актау', 'Атырау', 'Актобе', 'Семей', 'Усть-Каменогорск', 'Тараз', 'Костанай', ' Кызылорда', 'Павлодар', 'Петропавловск']
    },
    mutations: {
      addToken (state, token) {
        state.token = token
      },
      logout (state) {
        state.token = null
      }
    },
    actions: {
    },
    getters: {
      token (state) {
        return state.token
      },
      cities (state) {
        return state.cities
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
