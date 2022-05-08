import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { exchangeMoney } from '../features/walletSlice'
import { setCurrencies } from '../features/currenciesSlice'
import HomePage from '../components/HomePage'

//check the  link below and click on "free plan" to get a free temporary app_id and replace it with the app_id string.
//https://openexchangerates.org/signup/

const app_id = 'c432c6e1a0ba4d619271d14b8ca6a17c'

const url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`

const Home = () => {
  const { isLoading, error, data } = useQuery('fetchData', () => axios(url), {
    refetchInterval: 5000,
  })

  const dispatch = useDispatch()
  const wallet = useSelector((state) => state.wallet)
  const currency = useSelector((state) => state.currencies)

  useEffect(() => {
    if (data?.data.rates) {
      const { AED, GBP, EUR } = data?.data.rates
      dispatch(setCurrencies({ USD: 1, AED, EUR, GBP }))
    }
  }, [data])

  const onFinalExchangeHandler = (currency1, currency2, amount) => {
    const amount1 = amount

    const amount2 = (currency[currency2] * amount) / currency[currency1]

    dispatch(
      exchangeMoney({
        currency1,
        currency2,
        amount1,
        amount2,
      })
    )
  }

  if (isLoading) {
    return <h1>Loading... Please Wait</h1>
  }
  if (error) {
    return <h1>something went wrong</h1>
  }
  return (
    <div>
      <Head>
        <title>Hesaba Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage
          wallet={wallet}
          currency={currency}
          onFinalExchange={onFinalExchangeHandler}
        />
      </main>
    </div>
  )
}

export default Home
