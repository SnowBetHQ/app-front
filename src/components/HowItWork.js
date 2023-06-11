import React from 'react'

const HowItWork = () => {
    return (
        <div className="mx-auto text-center pt-5 max-w-3xl">
            <h2 className="font-custom mt-2 text-teal-500 font-extrabold sm:text-3xl text-3xl">How SnowBet Options Work?</h2>
            <p className='text-sm pt-1'>Three investing options are given to a user, the option up, down, and range. The options let the user guess whether the price of his coin will be higher, lower, or remain in a range by the end of a pre-selected timeframe compare to when he placed his bet. Options of the same type are collected into pools. To make a bet actionable, the user has to buy an option that is priced as a share in the corresponding pool. By the end of the pre-selected timeframe, the price of the coin will be verified and compared to when the user took the bet. If the user guessed right, he will be able to claim the reward. The reward corresponds to the total value locked in pools divided by the number of people in the winning pool.</p>
            <h2 className="font-custom mt-2 text-teal-500 font-extrabold sm:text-3xl text-3xl">How Gains are calculated?</h2>
            <p className='text-sm pt-1'>Snowbet gains are calculated according to the total value locked of all pools combined and the number of participants in the winning pool. A participant's gain is also dependent on the number of shares in the winning pool. More shares meaning a greater prize.</p>
            <h2 className="font-custom mt-2 text-teal-500 font-extrabold sm:text-3xl text-3xl">Does SnowBet have a token?</h2>
            <p className='text-sm pt-1'>No, Snowbet has no token yet. Our aim is to offer a simple way to bet on the evolution of cyptocurrency prices.</p>
            <h2 className="font-custom mt-2 text-teal-500 font-extrabold sm:text-3xl text-3xl">Having trouble using SnowBet?</h2>
            <p className='text-sm pt-1'>You can reach us on <a href='https://discord.com/' className='text-teal-500'>Discord</a>, our team will help you!</p>
            <div className='pt-5'></div>
        </div>
    )
}

export default HowItWork
