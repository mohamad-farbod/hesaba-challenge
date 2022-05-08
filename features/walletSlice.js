import { createSlice } from '@reduxjs/toolkit'
import { BiDollar, BiEuro, BiPound, BiDoughnutChart } from 'react-icons/bi'

const initialState = {
  USD: { value: 3000, logo: <BiDollar /> },
  EUR: { value: 2500, logo: <BiEuro /> },
  AED: { value: 3200, logo: <BiDoughnutChart /> },
  GBP: { value: 2000, logo: <BiPound /> },
}
export const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    exchangeMoney: (state, action) => {
      const { currency1, currency2, amount1, amount2 } = action.payload
      console.log(currency1, currency2, amount1, amount2)
      state[currency1].value = state[currency1].value - amount1
      state[currency2].value = state[currency2].value + amount2
    },
  },
})

export const { exchangeMoney } = walletSlice.actions

export default walletSlice.reducer
