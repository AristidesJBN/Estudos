function questao1(){
    var operação = Number(prompt('informe qual operação você deseja fazer: \n\n 1- Soma \n 2- Subtração \n 3- Multiplicação \n 4- Divisão'));
    var n1 = Number(prompt('informe o primeiro número:'));
    var n2 = Number(prompt('informe o segundo número:'));
    
    switch (operação) {
        case 1:
            return alert(`${n1} + ${n2} = ${n1+n2}`);
        case 2: 
            return alert(`${n1} - ${n2} = ${n1-n2}`);
        case 3:
            return alert(`${n1} * ${n2} = ${n1*n2}`);
        case 4: 
            return alert(`${n1} / ${n2} = ${n1/n2}`);
        default:
            return alert(`O número informado não condiz com as operações mostradas`);    }

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
    alert(`a) Preço total da compra: ${preco_total}`)
    alert(`b) Produto mais caro: ${mais_caro} || Produto mais barato: ${mais_barato}`)
}
function questao3(){

    var senha = prompt("Digite a senha:")
    valida_senha(senha);


    function valida_senha(senhaF){
        var regEx  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; //Andressa quem ensinou.
        var regExToF = regEx.test(senhaF)

        if (regExToF){
            alert('Senha cadastrada.');
        }else{
            alert('A senha deve conter no mínimo 8 dígitos, letras maíusculas, minúsculas e números');
            questao3();
        }
    }
}
function questao4(){
    var i = 1;
    var soma = 0;

    function lançar_dado(quant){
        while (i <= quant){
            d6 =  Math.floor(1 + Math.random() * 5);
            alert(`${i}º dado: ${d6}`);
            soma = soma+d6
            i++
        }   
        alert(`A soma dos ${quant} dados foi ${soma}`)
    }
    

    var qtd_d6 = prompt("Digite a quantidade de dados:")
    lançar_dado(qtd_d6);
}
function questao5(){

    function contar_vogais(palavra){

        let i = 0;
        const tamanho_palavra = palavra.length;
        var cont = 0;
    
        while (i < tamanho_palavra){
    
            const letra = palavra.charAt(i);

            if (verifica_vogal(letra)){
                   cont++
            }
            i++
        }
        alert(`A palavra ${palavra} contém ${cont} vogais`)
    }
    
    function verifica_vogal(letra){
        letra = letra.toLowerCase();
            
        switch (letra) {
            case "a": case "à": case "â": case "ã":
            case "e": case "é": case "ê":
            case "i": case "í":
            case "o": case "ó": case "ô":
            case "u": case "ú":
                return resposta = true;
            default:
                return resposta = false;
        }
    }
    
    var palavra = prompt("Digite a palavra:")
    contar_vogais(palavra);
}