import { useEffect, useState } from 'react';
import Web3 from 'web3';
import ContractABI from '../utils/ABI.json';
import contractETH from '@/utils/contractAddress';

function divideStrBy100(price) {
    var number = parseFloat(price);
    var result = number / 100;
    return result.toString();
}

function getTicketLabel(ticketType) {
    if (ticketType === '1') {
        return 'ETHLOW 📉';
    } else if (ticketType === '2') {
        return 'ETHRANGE ⚖️';
    } else if (ticketType === '3') {
        return 'ETHUP 📈';
    } else {
        return 'Unknown';
    }
}

const Options = () => {
    const contractAddress = contractETH;
    const abi = ContractABI;

    const [options, setOptions] = useState([]);
    const [lastBet, setLastBet] = useState(null); // New state to store the last bet

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(abi, contractAddress);

            async function fetchOptions() {
                try {
                    const optionCount = await contract.methods.getOptionCount().call();
                    const fetchedOptions = [];

                    for (let i = 0; i < optionCount; i++) {
                        const option = await contract.methods.options(i).call();
                        fetchedOptions.push(option);
                    }

                    setOptions(fetchedOptions);

                    const lastBetIndex = fetchedOptions.length - 1;
                    const lastBetOption = fetchedOptions[lastBetIndex];
                    setLastBet(lastBetOption);
                } catch (error) {
                    console.error('Error fetching options:', error);
                }
            }

            window.ethereum.enable().then(() => {
                fetchOptions();
            });
        } else {
            console.error('Web3 provider not found');
        }
    }, []);

    return (
        <div className="flex justify-center pt-5">
            <div className="max-w-2xl pt-2">
                <h3 className="text-white font-extrabold text-3xl text-center shadow-lg">🎲 Last Bets 🎲</h3>
                <ul className="mx-auto mt-2 grid max-w-7xl grid-cols-1 gap-12 px-6">
                    {/* {lastBet && (
                        <div className="">
                            <div className="card flex w-full flex-col rounded border border-teal-500 p-2 px-8 shadow">
                                <li>
                                    <p><span className='font-bold text-teal-500'>USER</span>: {lastBet.creator}</p>
                                    <p><span className='font-bold text-teal-500'>STRIKE PRICE</span>: {divideStrBy100(lastBet.strike_price.toString())}$</p>
                                    <p><span className='font-bold text-teal-500'>OPTION TYPE</span>: {getTicketLabel(lastBet.ticket_type.toString())}</p>
                                </li>
                            </div>
                        </div>
                    )} */}

                    {options.map((option, index) => (
                        <div className="" key={index}>
                            <div className="card flex w-full flex-col rounded border border-teal-500 p-2 px-8 shadow">
                                <li>
                                    <p><span className='font-bold text-teal-500'>USER</span>: {option.creator}</p>
                                    <p><span className='font-bold text-teal-500'>STRIKE PRICE</span>: {divideStrBy100(option.strike_price.toString())}$</p>
                                    <p><span className='font-bold text-teal-500'>OPTION TYPE</span>: {getTicketLabel(option.ticket_type.toString())}</p>
                                </li>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Options;
