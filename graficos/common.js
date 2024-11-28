export function criarGrafico(data, layout) {
    const div = document.createElement('div');
    div.classList.add('grafico');
    document.getElementById('graficos-container').appendChild(div);
    Plotly.newPlot(div, data, layout);
}

export function incluirTexto(texto) {
    const textoElemento = document.createElement('p');
    textoElemento.innerHTML = texto;
    textoElemento.classList.add('graficos-container__texto');
    document.getElementById('graficos-container').appendChild(textoElemento);
}

export function getCSS(property) {
    return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
}

export const tickConfig = {
    color: getCSS('--primary-color'),
    size: 20,
    family: getCSS('--font')
};
