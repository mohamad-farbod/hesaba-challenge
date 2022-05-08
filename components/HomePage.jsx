import React from 'react'
import { useState } from 'react'
import { MdSwapVert } from 'react-icons/md'

const HomePage = ({ wallet, onFinalExchange, currency }) => {
  const walletKeys = Object.keys(wallet)
  const [currency1, setCurrency1] = useState(walletKeys[0])
  const [currency2, setCurrency2] = useState(walletKeys[1])
  const [exchangeAmount, setExchangeAmount] = useState(0)

  const onExchangeHandler = () => {
    const decimalCount = (num) => {
      // Convert to String
      const numStr = String(num)
      // String Contains Decimal
      if (numStr.includes('.')) {
        return numStr.split('.')[1].length
      }
      // String Does Not Contain Decimal
      return 0
    }
    if (isNaN(exchangeAmount) || exchangeAmount <= 0) {
      alert('input should be a positive number ')
      return
    }
    if (exchangeAmount > wallet[currency1].value) {
      alert('you have Exceeded your wallet limit ')
      return
    }
    if (decimalCount(exchangeAmount) > 2) {
      alert('you cant use more than 2 decimal points ')
      return
    }

    onFinalExchange(currency1, currency2, exchangeAmount)
  }

  return (
    <div className=" mx-auto mt-8 w-1/2 border border-black p-4 pt-12">
      <div className="flex items-center justify-between">
        <div>
          <select
            className=" text-md cursor-pointer rounded-lg  p-1  hover:cursor-pointer"
            value={currency1}
            onChange={(e) => setCurrency1(e.target.value)}
          >
            {walletKeys.map((item) => {
              if (item === currency2) return
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              )
            })}
          </select>
          <div className="ml-2 flex items-center justify-start text-xs text-gray-400">
            {wallet[currency1].logo}
            {wallet[currency1].value.toFixed(2)}
          </div>
        </div>{' '}
        <div>
          <input
            className="rounded-md border border-black p-2 "
            type="number"
            value={exchangeAmount}
            onChange={(e) => {
              setExchangeAmount(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="relative mt-4 bg-gray-200 pb-8 pt-6 pl-2">
        <div className=" -my-9 mx-auto flex  w-min items-center justify-start rounded-md border border-gray-400 bg-white px-3 text-center">
          {wallet[currency1].logo}1=
          {(currency[currency2] / currency[currency1]).toFixed(6)}
          {wallet[currency2].logo}
        </div>
        <div
          className="absolute -top-3 left-2 cursor-pointer rounded-full bg-black text-2xl text-blue-400 hover:bg-red-800"
          onClick={() => {
            setCurrency1(currency2)
            setCurrency2(currency1)
          }}
        >
          <MdSwapVert />
        </div>
        <div className="mt-12 flex items-start justify-between">
          <div>
            <select
              className=" text-md cursor-pointer rounded-lg  p-1  hover:cursor-pointer"
              value={currency2}
              onChange={(e) => setCurrency2(e.target.value)}
            >
              {walletKeys.map((item) => {
                if (item === currency1) return
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>{' '}
            <div className="my-1  flex items-center justify-start text-xs text-gray-400">
              {wallet[currency2].logo} {wallet[currency2].value.toFixed(2)}
            </div>
          </div>
          <div className="mr-4">
            {(
              (currency[currency2] * exchangeAmount) /
              currency[currency1]
            ).toFixed(2)}
          </div>
        </div>
      </div>
      <div className=" mt-4 w-full text-center">
        <button
          className="mx-auto rounded-md bg-blue-400 px-3 py-2 text-white hover:bg-blue-600"
          onClick={onExchangeHandler}
        >
          EXCHANGE
        </button>
      </div>
    </div>
  )
}

export default HomePage
