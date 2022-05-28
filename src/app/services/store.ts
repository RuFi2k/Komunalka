import { Store } from 'redux'
import { AllAction } from 'store/action'
import { ReduxState } from 'types'

let _store: Store<ReduxState, AllAction>

export const setStore = (store: Store) => (_store = store)
export const getState = () => (_store && _store.getState()) || {}
export const dispatch = (action: AllAction) =>
  (_store && _store.dispatch(action)) || {}

export default {
  setStore,
  getState,
  dispatch,
}
