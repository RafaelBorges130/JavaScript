function opcaoEscolhida(opcao) {
    var mensagem = document.getElementById("mensagem");
    switch (opcao) {
        case 1:
            mensagem.textContent = "Opção 1 escolhida";
            break;
        case 2:
            mensagem.textContent = "Opção 2 escolhida";
            break;
        case 3:
            mensagem.textContent = "Opção 3 escolhida";
            break;
        default:
            mensagem.textContent = "Opção inválida";
    }
}