import AppStateClass from './app-state'

/* eslint-disable */
export const AppState = AppStateClass

export default { AppState }

export const createStoreMap = () => {
  return {
    appState: new AppState(),
  }
}
