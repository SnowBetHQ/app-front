import React, { useEffect } from 'react';

const TradingViewTickerTape = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                {
                    description: 'ETH/USDC',
                    proName: 'OKX:ETHUSDC',
                },
                {
                    description: 'BTC/USDC',
                    proName: 'OKX:BTCUSDC',
                },
                {
                    description: 'MATIC/USDC',
                    proName: 'OKX:MATICUSDC',
                },
                {
                    description: 'UNI/USDC',
                    proName: 'OKX:UNIUSDC',
                },
                {
                    description: 'LINK/USDC',
                    proName: 'OKX:LINKUSDC',
                },
            ],
            showSymbolLogo: false,
            colorTheme: 'dark',
            isTransparent: true,
            displayMode: 'adaptive',
            locale: 'en',
        });

        document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget')[0].innerHTML = '';
        };
    }, []);

    return (
        <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget" />
        </div>
    );
};

export default TradingViewTickerTape;
