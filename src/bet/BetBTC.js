import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ContractABI from '../utils/ABI.json';
import contractBTC from '@/utils/contractBTC';

const contractABI = ContractABI;
const contractAddress = contractBTC;

const BetBTC = () => {
    const [endTime, setEndTime] = useState(0);
    const [countdown, setCountdown] = useState(0);
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [symbol, setSymbol] = useState('');

    useEffect(() => {
        const initializeWeb3 = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                setContract(contractInstance);
                await window.ethereum.enable();
                setSelectedAccount(window.ethereum.selectedAddress);
            }
        };

        initializeWeb3();
    }, []);

    useEffect(() => {
        const fetchEndTime = async () => {
            if (contract) {
                const endTime = await contract.methods.endTime().call();
                setEndTime(parseInt(endTime, 10));
            }
        };

        fetchEndTime();
    }, [contract]);

    useEffect(() => {
        let countdownInterval;

        if (endTime > 0) {
            countdownInterval = setInterval(() => {
                const currentTimestamp = Math.floor(Date.now() / 1000);
                const remainingTime = endTime - currentTimestamp;
                console.log(remainingTime);

                if (remainingTime <= 0) {
                    setEndTime(0);
                    clearInterval(countdownInterval);
                    setCountdown();
                    setSymbol('NOW 💰');
                } else {
                    setCountdown(remainingTime);
                    setSymbol(' sec');
                }
            }, 1000);
        }

        return () => {
            clearInterval(countdownInterval);
        };
    }, [endTime]);

    const betLow = async () => {
        if (web3 && selectedAccount) {
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 500000;

            await contract.methods.betLow().send({
                from: selectedAccount,
                value: web3.utils.toWei('0.001', 'ether'),
                gasPrice,
                gas: gasLimit
            });
        }
    };

    const betRange = async () => {
        if (web3 && selectedAccount) {
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 500000;

            await contract.methods.betRange().send({
                from: selectedAccount,
                value: web3.utils.toWei('0.001', 'ether'),
                gasPrice,
                gas: gasLimit
            });
        }
    };

    const betHigh = async () => {
        if (web3 && selectedAccount) {
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 500000;

            await contract.methods.betHigh().send({
                from: selectedAccount,
                value: web3.utils.toWei('0.001', 'ether'),
                gasPrice,
                gas: gasLimit
            });
        }
    };

    const claim = async () => {
        if (web3 && selectedAccount) {
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = 500000;

            await contract.methods.setExpirationPrice().send({
                from: selectedAccount,
                gasPrice,
                gas: gasLimit
            });
        }
    };

    return (
        <div>
            <div className="mt-2 flex justify-center">
                <button
                    className="card w-full flex-col justify-center items-center rounded border border-teal-500 bg-teal-500 px-8 shadow"
                    onClick={betLow}
                    style={{ marginRight: "2px" }}
                >
                    <span className="text-xs mx-auto font-bold">BTCLOW</span>
                </button>
                <button
                    className="card w-full flex-col justify-center items-center rounded border border-teal-500 bg-teal-500 px-8 shadow"
                    onClick={betRange}
                    style={{ margin: "0 2px" }}
                >
                    <span className="text-xs font-bold">BTCRANGE</span>
                </button>
                <button
                    className="card w-full flex-col justify-center items-center rounded border border-teal-500 bg-teal-500 px-8 shadow"
                    onClick={betHigh}
                    style={{ marginLeft: "2px" }}
                >
                    <span className="text-xs font-bold">BTCUP</span>
                </button>
            </div>

            <div className="pt-2">
                <button
                    className="card w-full flex-col justify-center items-center rounded border border-teal-500 bg-teal-500 px-8 shadow"
                    onClick={claim}
                    disabled={endTime !== 0}
                >
                    <span className="text-xs font-bold">
                        CLAIM <span>{countdown}{symbol}</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default BetBTC;
