var numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (numero < 0) {
    alert("Não é possível calcular o fatorial de um número negativo.");
} else {
    var fatorial = 1;

    for (var i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    alert("O fatorial de " + numero + " é: " + fatorial);
}
