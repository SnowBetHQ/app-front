import { useEffect } from 'react';

const UniUsdChart = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            const widget = new window.TradingView.widget({
                symbol: 'OKX:UNIUSDC',
                interval: 'H',
                fullscreen: false,
                width: '100%',
                height: '350',
                container_id: 'uni-chart',
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

    return <div id="uni-chart" className='pt-4' />;
};

export default UniUsdChart;