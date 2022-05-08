import React from 'react'

const WalletInfo = ({ wallet }) => {
  return (
    <div className=" rounded-lg bg-gray-800 p-2 px-12 text-xl text-gray-100 ">
      <h1>Wallet Overview</h1>
      <ul className="list-disc space-y-2 py-4">
        <li>
          USD: <span className="text-md">{wallet.USD.toFixed(2)} $</span>
        </li>
        <li>
          AED: <span className="text-md">{wallet.AED.toFixed(2)} D</span>
        </li>
        <li>
          EUR: <span className="text-md">{wallet.EUR.toFixed(2)} €</span>
        </li>
        <li>
          GBP: <span className="text-md">{wallet.GBP.toFixed(2)} £</span>
        </li>
      </ul>
    </div>
  )
}

export default WalletInfo
