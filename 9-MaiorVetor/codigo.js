var tamanho = parseInt(prompt("Digite o tamanho do vetor:"));

var vetor = [];

for (var i = 0; i < tamanho; i++) {
    var numero = parseFloat(prompt("Digite o número " + (i + 1) + " do vetor:"));
    vetor.push(numero);
}

var maior = vetor[0];

for (var i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
}

alert("O maior número do vetor é: " + maior);
