import { useEffect } from 'react';

const LinkUsdChart = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            const widget = new window.TradingView.widget({
                symbol: 'OKX:LINKUSDC',
                interval: 'H',
                fullscreen: false,
                width: '100%',
                height: '350',
                container_id: 'link-chart',
                theme: 'dark',
                style: '10',
                backgroundColor: "#0d1114",
                gridColor: "#2BE4CB",
                lineColor: "#2BE4CB",
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div id="link-chart" className='pt-4' />;
};

export default LinkUsdChart;