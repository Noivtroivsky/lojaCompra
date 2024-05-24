// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Função para finalizar a compra (limpar carrinho)
function finalizarCompra() {
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
}

// Função para atualizar o conteúdo do carrinho na página
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartItemsElement = document.getElementById('cart-items');
    let total = 0;

    // Limpar itens do carrinho
    cartItemsElement.innerHTML = '';

    // Adicionar itens do carrinho à lista e calcular o total
    carrinho.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
        total += item.preco;
    });

    // Atualizar total
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Atualizar carrinho quando a página carrega
window.onload = atualizarCarrinho;
