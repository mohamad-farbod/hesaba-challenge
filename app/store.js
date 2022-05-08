import { configureStore } from '@reduxjs/toolkit'
import walletReducer from '../features/walletSlice'
import currencyReducer from '../features/currenciesSlice'

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    currencies: currencyReducer,
  },
})

// export type RootState=ReturnType<typeof store.getState>
// export type AppDispatch= typeof store.dispatch
