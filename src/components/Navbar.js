import React from 'react'
import ConnectWalletButton from '@/utils/connectWallet';

const Navbar = () => {

    return (
        <div>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-4 sm:px-0">
                <div className="w-64">
                    <a className="font-space font-bold" href="/">
                        <img src="../assets/logo.png" alt="SNOWBET LOGO" />
                    </a>
                </div>
                <ConnectWalletButton />
            </nav>
            <div className='py-3' >
                <hr className='border-2 border-teal-500' />
            </div>
        </div>

    )
}

export default Navbar