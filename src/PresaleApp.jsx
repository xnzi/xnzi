import React, { useState } from 'react';
import { ethers } from 'ethers';

export default function PresaleApp() {
  const [amount, setAmount] = useState('');
  const [tokenOut, setTokenOut] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
      } catch (err) {
        console.error('Wallet connection error:', err);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleBuy = async () => {
    // Placeholder for actual presale interaction
    alert(`You have purchased tokens with ${amount} ETH`);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    const tokens = parseFloat(value || 0) * 5000; // 1 ETH = 5000 HVMD
    setTokenOut(tokens);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-zinc-900 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">BUY $HVMD</h2>
          <p className="text-sm text-gray-400">Stage 12 · 85.62% Complete</p>
          <div className="bg-orange-600 h-2 w-full rounded mt-2">
            <div className="bg-orange-400 h-full w-11/12 rounded"></div>
          </div>
          <div className="text-sm mt-2">$5,928,097.75 Raised</div>
        </div>

        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 border border-orange-500 rounded text-orange-500">ETH</button>
          <button className="px-4 py-2 border border-gray-500 rounded">BNB</button>
          <button className="px-4 py-2 border border-gray-500 rounded">USDT</button>
          <button className="px-4 py-2 border border-gray-500 rounded">OTHER</button>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Purchase Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-gray-600 text-white"
            placeholder="0.00 ETH"
          />
        </div>

        <div className="flex justify-between mb-6 text-sm">
          <div>
            <p className="text-gray-400">Amount You’ll Get</p>
            <p>{tokenOut.toFixed(2)} HVMD</p>
          </div>
          <div>
            <p className="text-gray-400">ETH Worth</p>
            <p>{amount || 0} ETH</p>
          </div>
        </div>

        <button
          onClick={walletConnected ? handleBuy : handleConnectWallet}
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded text-black font-bold"
        >
          {walletConnected ? 'BUY TOKENS' : 'CONNECT WALLET'}
        </button>
      </div>
    </div>
  );
}
