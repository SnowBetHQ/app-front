import { useEffect } from 'react';

const EthUsdChart = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            const widget = new window.TradingView.widget({
                symbol: 'OKX:ETHUSDC',
                interval: 'H',
                fullscreen: false,
                width: '100%',
                height: '350',
                container_id: 'eth-chart',
                theme: 'dark',
                style: '10',
                backgroundColor: "#0d1114",
                lineColor: "#2BE4CB",
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="eth-chart" className='pt-4' />;
};

export default EthUsdChart;