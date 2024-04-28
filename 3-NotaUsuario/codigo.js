
var nota = parseFloat(prompt("Digite a sua nota:"));


if (nota < 6) {
    alert("Reprovado");
} else if (nota >= 6 && nota < 8) {
    alert("Aprovado");
} else if (nota >= 8) {
    alert("Aprovado com louvor");
} else {
    alert("Nota inválida");
}
