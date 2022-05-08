import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  USD: 3000,
  EUR: 2500,
  AED: 3200,
  GBP: 2000,
}
export const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    exchangeMoney: (state, action) => {
      const { currency1, currency2, amount1, amount2 } = action.payload
      state[currency1] = state[currency1] - amount1
      state[currency2] = state[currency2] + amount2
    },
  },
})

export const { exchangeMoney } = walletSlice.actions

export default walletSlice.reducer
