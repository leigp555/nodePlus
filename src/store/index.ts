import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './types'

import numFactoryModule from './modules/NumFactory'

export const store = createStore<RootStateTypes>({
  state() {
    return { data: { currentTab: 3 } }
  },
  getters: {
    getCurrentTab(state) {
      return state.data.currentTab
    }
  },
  mutations: {
    modifyCurrentTab(state, payload) {
      state.data.currentTab = payload
      window.localStorage.setItem('item1', JSON.stringify(state.data))
    },
    updateCurrentTab(state) {
      const data = JSON.parse(window.localStorage.getItem('item1')!) || {
        currentTab: 3
      }
      state.data.currentTab = data.currentTab
    }
  },
  actions: {},
  modules: {
    numFactoryModule
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
