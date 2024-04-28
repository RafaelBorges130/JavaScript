var linhas = parseInt(prompt("Digite o número de linhas da matriz:"));
var colunas = parseInt(prompt("Digite o número de colunas da matriz:"));

var matriz = [];

for (var i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (var j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt("Digite o valor da posição [" + i + "][" + j + "]:"));
    }
}

var soma = 0;
for (var i = 0; i < linhas; i++) {
    for (var j = 0; j < colunas; j++) {
        soma += matriz[i][j];
    }
}

alert("A soma dos elementos da matriz é: " + soma);
