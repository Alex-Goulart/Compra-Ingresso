// Função para realizar a compra
function comprar() {
    // recuperar o tipo de ingresso selecionado
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    // recuperar a quantidade de ingressos selecionada
    let quantidade = parseInt(document.getElementById('qtd').value);

    //Validação da quantidade de ingressos
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida de ingressos.');
        return;
    }

    // Confirma a compra
    let confirmarCompra = confirm(`Você deseja comprar ${quantidade} ingresso(s) do tipo ${tipoIngresso}?`);
    if (!confirmarCompra) {
        return; // Se o usuário cancelar, a função é encerrada
    }

    // Verificar o tipo de ingresso escolhido
    if (tipoIngresso === 'pista') {
        let quantidadeDisponivel = parseInt(document.getElementById('qtd-pista').textContent); // recuperar a quantidade de ingressos disponíveis para pista
        if (quantidade <= quantidadeDisponivel) {
            quantidadeDisponivel = quantidadeDisponivel - quantidade; // atualizar a quantidade de ingressos disponíveis
            document.getElementById('qtd-pista').textContent = quantidadeDisponivel;
            alert ('Compra realizada com sucesso!');
        } else {
            alert('Quantidade de ingressos selecionada excede a disponível.');
        }
    }else if (tipoIngresso === 'superior') {
        let quantidadeDisponivel = parseInt(document.getElementById('qtd-superior').textContent); // recuperar a quantidade de ingressos disponíveis para superior
        if (quantidade <= quantidadeDisponivel) {
            quantidadeDisponivel = quantidadeDisponivel - quantidade; // atualizar a quantidade de ingressos disponíveis
            document.getElementById('qtd-superior').textContent = quantidadeDisponivel;
            alert ('Compra realizada com sucesso!');
        } else {
            alert('Quantidade de ingressos selecionada excede a disponível.');
        }
    } else if (tipoIngresso === 'inferior') {
        let quantidadeDisponivel = parseInt(document.getElementById('qtd-inferior').textContent); // recuperar a quantidade de ingressos disponíveis para inferior
        if (quantidade <= quantidadeDisponivel) {
            quantidadeDisponivel = quantidadeDisponivel - quantidade; // atualizar a quantidade de ingressos disponíveis
            document.getElementById('qtd-inferior').textContent = quantidadeDisponivel;
            alert ('Compra realizada com sucesso!');
        } else {
            alert('Quantidade de ingressos selecionada excede a disponível.');
        }
    }

    //limpar o campo de quantidade após a compra
    document.getElementById('qtd').value = '';
}