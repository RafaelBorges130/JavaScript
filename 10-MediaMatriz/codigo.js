var linhas = parseInt(prompt("Digite o número de linhas da matriz:"));
var colunas = parseInt(prompt("Digite o número de colunas da matriz:"));

var matriz = [];

for (var i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (var j = 0; j < colunas; j++) {
        var elemento = parseFloat(prompt("Digite o valor da posição [" + i + "][" + j + "]:"));
        matriz[i][j] = elemento;
    }
}

var soma = 0;
for (var i = 0; i < linhas; i++) {
    for (var j = 0; j < colunas; j++) {
        soma += matriz[i][j];
    }
}

var media = soma / (linhas * colunas);

alert("A média dos elementos da matriz é: " + media);
