import NumFactoryStateTypes from './modules/NumFactory/types'

export default interface RootStateTypes {
  currentKind: string
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
}
