import React from 'react'
import ETHchart from '../charts/eth'
import BTCchart from '../charts/btc'

import BetETH from '../bet/BetETH'
import BetBTC from '../bet/BetBTC'
import Web3 from 'web3';
import ContractABI from '../utils/ABI.json';
import contractETH from '@/utils/contractAddress';
import contractBTC from '@/utils/contractBTC';


import { useEffect, useState } from 'react'

const contractABI = ContractABI;
const contractAddress = contractETH;

const PriceLive = () => {
    const [endBet, setEndBet] = useState(0);
    const [countdown, setCountdown] = useState(0);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const initializeWeb3 = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                const web3Instance = new Web3(window.ethereum);
                const contractInstance = new web3Instance.eth.Contract(ContractABI, contractETH);
                setContract(contractInstance);
                await window.ethereum.enable();
            }
        };

        initializeWeb3();
    }, []);

    useEffect(() => {
        const fetchEndBet = async () => {
            if (contract) {
                const endBet = await contract.methods.endBet().call();
                setEndBet(parseInt(endBet, 10));
            }
        };

        fetchEndBet();
    }, [contract]);

    useEffect(() => {
        let countdownInterval;

        if (endBet > 0) {
            countdownInterval = setInterval(() => {
                const currentTimestamp = Math.floor(Date.now() / 1000);
                const remainingTime = endBet - currentTimestamp;
                if (remainingTime <= 0) {
                    setEndBet(0);
                    clearInterval(countdownInterval);
                }
                setCountdown(remainingTime);
            }, 1000);
        }

        return () => {
            clearInterval(countdownInterval);
        };
    }, [endBet]);


    return (
        <div>
            <div className='max-w-2xl pt-2 justify-center'>
                <div className="group flex justify-center gap-1.5">
                    <h3 className="text-white font-extrabold text-3xl text-center">Live Prices</h3>
                    <span className="relative -mr-2 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                    </span>
                </div>
            </div>
            <div className="mx-auto mt-2 grid max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2">
                <div className="card flex w-full flex-col rounded border border-teal-500 p-6 px-8 shadow">
                    <div>
                        <div className="flex items-center justify-between text-lg font-bold">
                            <img src='../assets/ethereum.png' alt='ETH LOGO' />
                            <span>ETH OPTION 30 MIN</span>
                            <span className="text-sm font-extrabold rounded bg-teal-500 px-2">
                                {endBet === 0 ? (
                                    <span>🔥 BET IS FINISHED</span>
                                ) : (
                                    <span>🔥 BET LIVE : {countdown}'s</span>
                                )}
                            </span>
                        </div>
                        <div className=''>
                            <ETHchart />
                        </div>
                        <div class="flex justify-center">
                            <div class="mt-2 rounded border border-teal-500 font-semibold px-2 py-">
                                <div class="flex items-center">
                                    <div class="flex items-center gap-28">
                                        <p class="text-xs pt-1">Price - 1,01%</p>
                                        <p class="text-xs pt-1">Price +/- 1%</p>
                                        <p class="text-xs pt-1">Price + 1,01%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BetETH />

                    </div>
                </div>


                <div className="card flex w-full flex-col rounded border border-teal-500 p-6 px-8 shadow">
                    <div>
                        <div className="flex items-center justify-between text-lg font-bold">
                            <img src='../assets/bitcoin.png' alt='BTC LOGO' />
                            <span>BTC OPTION 30 MIN</span>
                            <span className="text-sm font-extrabold rounded bg-teal-500 px-2">
                                {endBet === 0 ? (
                                    <span>🔥 BET IS FINISHED</span>
                                ) : (
                                    <span>🔥 BET LIVE : {countdown}'s</span>
                                )}
                            </span>
                        </div>
                        <BTCchart />
                        <div class="flex justify-center">
                            <div class="mt-2 rounded border border-teal-500 font-semibold px-2 py-">
                                <div class="flex items-center">
                                    <div class="flex items-center gap-28">
                                        <p class="text-xs pt-1">Price - 1,01%</p>
                                        <p class="text-xs pt-1">Price +/- 1%</p>
                                        <p class="text-xs pt-1">Price + 1,01%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BetBTC />

                    </div>
                </div>
            </div>
            {/* <div className="mx-auto sm:pt-5 mt-2 grid max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-3">
                <div className="card flex w-full flex-col rounded border border-teal-500 p-6 px-8 shadow">
                    <div>
                        <div className="flex items-center justify-between text-lg font-bold">
                            <img src='../assets/polygon.png' alt='MATIC LOGO' />
                            <span>MATIC 30 Days</span>
                        </div>
                        <MATICchart />
                        <p className='text-xs pt-1'>How this option work explained, how to...</p>
                    </div>
                </div>
                <div className="card flex w-full flex-col rounded border border-teal-500 p-6 px-8 shadow">
                    <div>
                        <div className="flex items-center justify-between text-lg font-bold">
                            <img src='../assets/uniswap.png' alt='UNISWAP LOGO' />
                            <span>UNI 30 Days</span>
                        </div>
                        <UNIchart />
                        <p className='text-xs pt-1'>How this option work explained, how to...</p>
                    </div>
                </div>
                <div className="card flex w-full flex-col rounded border border-teal-500 p-6 px-8 shadow">
                    <div>
                        <div className="flex items-center justify-between text-lg font-bold">
                            <img src='../assets/chainlink.png' alt='CHAINLINK LOGO' />
                            <span>LINK 30 Days</span>
                        </div>
                        <LINKchart />
                        <p className='text-xs pt-1'>How this option work explained, how to...</p>
                    </div>
                </div>
            </div> */}
        </div >
    )
}

export default PriceLive
