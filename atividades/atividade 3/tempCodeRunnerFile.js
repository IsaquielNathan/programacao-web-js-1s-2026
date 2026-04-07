function cadastrar_produto(id, nome, qtd){
        let produto = {
            id: id,
            nome: nome,
            qtd: qtd
        };
        produtos.push(produto);
}
function listar_produtos(){
    return produtos;
}

function remover_produtos(id) {
    produtos = produtos.filter(produto => produto.id !== id);
}

function editar_produto(id, qtd) {
    let produto = produtos.find(produto => produto.id === id);
    if (produto) {
        produto.qtd = qtd;
    }
}