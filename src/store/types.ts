import NumFactoryStateTypes from './modules/NumFactory/types'

export default interface RootStateTypes {
  data: {
    currentTab: number
  }
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
}
