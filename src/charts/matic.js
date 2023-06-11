import { useEffect } from 'react';

const MaticUsdChart = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            const widget = new window.TradingView.widget({
                symbol: 'OKX:MATICUSDC',
                interval: 'H',
                fullscreen: false,
                width: '100%',
                height: '350',
                container_id: 'matic-chart',
                theme: 'dark',
                style: '10',
                backgroundColor: "#0d1114",
                gridColor: "#2BE4CB",
                barColor: "#2BE4CB",
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="matic-chart" className='pt-4' />;
};

export default MaticUsdChart;