import { criarGrafico, getCSS, tickConfig } from "./common.js";

const data = [
    {
        labels: ["Instagram", "Facebook", "TikTok", "Twitter", "WhatsApp"],
        values: [35, 25, 20, 10, 10],
        type: 'pie',
        marker: {
            colors: [
                getCSS('--secondary-color'),
                '#7dd3fc', '#bae6fd', '#e0f2fe', '#f0f9ff'
            ]
        }
    }
];

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais favoritas no mundo (%)',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    }
};

criarGrafico(data, layout);
