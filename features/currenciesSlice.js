import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  USD: 1,
  AED: 3.6731,
  EUR: 0.94802,
  GBP: 0.810406,
}
export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: initialState,
  reducers: {
    setCurrencies: (state, action) => {
      return (state = { ...action.payload })
    },
  },
})

export const { setCurrencies } = currenciesSlice.actions

export default currenciesSlice.reducer
