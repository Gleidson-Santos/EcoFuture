// Função chamada pelo formulário de contato.
// O event.preventDefault() impede que a página recarregue ao enviar.
function enviarMensagem(event) {
    if (event) {
        event.preventDefault();
    }

    alert("Mensagem enviada com sucesso!");
}
