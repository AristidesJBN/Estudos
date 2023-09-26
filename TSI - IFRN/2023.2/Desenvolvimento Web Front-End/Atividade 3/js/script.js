function questao1(){

}
function questao2(){
    let tabela_produto = [
        {nm_produto: 'Coca-Cola 2L', qtd_produto: 3, preco_unid: 9.29},
        {nm_produto: 'Arroz 1Kg', qtd_produto: 2, preco_unid: 4.35},
        {nm_produto: 'Feijão Preto 1Kg', qtd_produto: 3, preco_unid: 5.6},
        {nm_produto: 'Calabresa Defumada 1Kg', qtd_produto: 1, preco_unid: 28.59},
        {nm_produto: 'Picanha 1Kg', qtd_produto: 2, preco_unid: 59.99}
    ];

    let i = 0;
    let linhas = tabela_produto.length;
    let preco_total = 0;
    let mais_caro = 0;
    let mais_barato = 63000001; //preço do Diamante “The Constellation”, um diamante bruto de 813 quilates (produto mais caro vendido)+1

    while (i < linhas){
       // console.log(tabela_produto[i])
        preco_total = (tabela_produto[i].qtd_produto * tabela_produto[i].preco_unid)

        if (tabela_produto[i].preco_unid > mais_caro){
            mais_caro = tabela_produto[i].preco_unid;
        }else if (tabela_produto[i].preco_unid < mais_barato){
            mais_barato = tabela_produto[i].preco_unid;
        }
        i++
    }
    console.log(`a) Preço total da compra: ${preco_total}`)
    console.log(`b) Produto mais caro: ${mais_caro} || Produto mais barato: ${mais_barato}`)
}
function questao3(){

}
function questao4(){

}
function questao5(){

}