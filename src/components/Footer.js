import React from 'react'


const Footer = () => {
    return (
        <div>
            <footer aria-label="Site Footer">
                <hr className='border-2 border-teal-500' />
                <div className="mx-auto max-w-screen-xl px-4 pt-2 pb-6 sm:px-6 lg:px-8 ">
                    <div className=''>
                        <div className="flex items-center justify-between gap-16 py-2">
                            <div className="w-72">
                                <img src="../assets/logo.png" alt="SNOWBET LOGO" />
                            </div>
                            <div className='w-18 flex space-x-2'>
                                <a href='https://twitter.com/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.05em" height="1.05em" viewBox="0 0 24 24" stroke="#2BE4CB" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>
                                </a>
                                <a href='https://discord.com/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.05em" height="1.05em" viewBox="0 0 24 24" stroke="#2BE4CB" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path><path d="M7 16.5c3.5 1 6.5 1 10 0"></path><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path><path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <div className="space-x-1 text-sm">
                                <span className="block sm:inline">© 2023 SnowBet | All rights reserved.</span>
                                <a className="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/#">Terms Of Use</a>
                                <span>·
                                </span>
                                <a className="inline-block text-teal-500 underline transition hover:text-teal-500/75" href="/#">Legal Notices</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer