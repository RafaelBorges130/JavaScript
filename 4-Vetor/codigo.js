
var tamanho = parseInt(prompt("Digite o tamanho do vetor:"));
var vetor = [];

for (var i = 0; i < tamanho; i++) {
    var numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
    vetor.push(numero);
}

var soma = 0;
for (var i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}
var media = soma / vetor.length;


alert("A média dos números do vetor é: " + media);
