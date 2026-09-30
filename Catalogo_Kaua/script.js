// pegando elementos
const btnCarrinho = document.getElementById('qtd-carrinho')
let carrinho = []

function adicionarCarrinho(id, nome, preco) {
    if (id) {
        carrinho.push({ id: id, nome: nome, preco: preco });
        btnCarrinho.innerText = carrinho.length;
        console.log(carrinho);
    }
}