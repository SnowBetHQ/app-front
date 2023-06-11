import { useState } from 'react';
import Web3 from 'web3';

const ConnectWalletButton = () => {
    const [connectedAddress, setConnectedAddress] = useState(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const ethereum = window.ethereum;
                const chainId = await ethereum.request({ method: 'eth_chainId' });
                if (chainId !== '0x13881') { // Check if network is not Polygon Testnet
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: '0x13881',
                                chainName: 'Polygon Testnet',
                                nativeCurrency: {
                                    name: 'Matic',
                                    symbol: 'MATIC',
                                    decimals: 18,
                                },
                                rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
                                blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
                            },
                        ],
                    });
                    console.log('Network changed to Polygon Testnet');
                    return;
                }

                await ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                const address = accounts[0];
                setConnectedAddress(address);
                console.log('Connected to wallet:', address);
            } catch (error) {
                console.error('Error connecting to wallet:', error);
            }
        } else {
            console.error('MetaMask (or any other Ethereum wallet) extension not detected!');
        }
    };

    const disconnectWallet = () => {
        setConnectedAddress(null);
        console.log('Wallet disconnected');
    };

    return (
        <div className=''>
            <button onClick={connectedAddress ? disconnectWallet : connectWallet} className="hidden items-center space-x-1 font-bold rounded bg-black px-8 py-3 border-teal-500 border-2 text-teal-500 sm:flex hover:bg-teal-200">
                {connectedAddress ? `${connectedAddress}` : 'CONNECT WALLET'}
            </button>
        </div>
    );
};

export default ConnectWalletButton;