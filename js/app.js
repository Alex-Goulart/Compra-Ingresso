// Função para realizar a compra
function comprar() {
    // recuperar o tipo de ingresso selecionado
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    // recuperar a quantidade de ingressos selecionada
    let quantidade = Number(document.getElementById('qtd').value);

    // Verificar o tipo de ingresso escolhido
    if (tipoIngresso === 'pista') {
        let quantidadeDisponivel = Number(document.getElementById('qtd-pista').textContent); // recuperar a quantidade de ingressos disponíveis para pista
        if (quantidade <= quantidadeDisponivel) {
            quantidadeDisponivel = quantidadeDisponivel - quantidade; // atualizar a quantidade de ingressos disponíveis
            document.getElementById('qtd-pista').textContent = quantidadeDisponivel;
        } else {
            alert('Quantidade de ingressos selecionada excede a disponível.');
        }
    }else if (tipoIngresso === 'superior') {
        let quantidadeDisponivel = Number(document.getElementById('qtd-superior').textContent); // recuperar a quantidade de ingressos disponíveis para superior
        if (quantidade <= quantidadeDisponivel) {
            quantidadeDisponivel = quantidadeDisponivel - quantidade; // atualizar a quantidade de ingressos disponíveis
            document.getElementById('qtd-superior').textContent = quantidadeDisponivel;
        } else {
            alert('Quantidade de ingressos selecionada excede a disponível.');
        }
    } else if (tipoIngresso === 'inferior') {
        let quantidadeDisponivel = Number(document.getElementById('qtd-inferior').textContent); // recuperar a quantidade de ingressos disponíveis para inferior
        if (quantidade <= quantidadeDisponivel) {
            quantidadeDisponivel = quantidadeDisponivel - quantidade; // atualizar a quantidade de ingressos disponíveis
            document.getElementById('qtd-inferior').textContent = quantidadeDisponivel;
        } else {
            alert('Quantidade de ingressos selecionada excede a disponível.');
        }
    }

    //limpar o campo de quantidade após a compra
    document.getElementById('qtd').value = '';
}