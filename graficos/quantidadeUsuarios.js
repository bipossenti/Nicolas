import { criarGrafico, getCSS, tickConfig } from "./common.js";

const data = [
    {
        x: ["Facebook", "Instagram", "TikTok", "WhatsApp", "Twitter"],
        y: [2950, 2400, 1050, 3000, 450],
        type: 'bar',
        marker: {
            color: getCSS('--secondary-color'),
        }
    }
];

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Quantidade de usuários (em milhões)',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Redes sociais',
            font: {
                color: getCSS('--primary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Milhões de usuários',
            font: {
                color: getCSS('--primary-color')
            }
        }
    }
};

criarGrafico(data, layout);
