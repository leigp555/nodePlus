import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes, { AllStateTypes } from './types'

import numFactoryModule from './modules/NumFactory'

export const store = createStore<RootStateTypes>({
  state() {
    return { currentKind: '' }
  },
  getters: {
    getCurrentKind(state) {
      return state.currentKind
    }
  },
  mutations: {
    modifyCurrentKind(state, payload) {
      state.currentKind = payload
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
