import { useEffect } from 'react';

const BtcUsdChart = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            const widget = new window.TradingView.widget({
                symbol: 'OKX:BTCUSDC',
                interval: 'H',
                fullscreen: false,
                width: '100%',
                height: '350',
                container_id: 'btc-chart',
                theme: 'dark',
                style: '10',
                backgroundColor: "#0d1114",
                barColor: "#2BE4CB",
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="btc-chart" className='pt-4' />;
};

export default BtcUsdChart;