function questao1(){
    var num = prompt('insira um número:');
    if (num%2 == 0){
        alert(`O número ${num} é par.`);
    }else{
        alert(`O número ${num} é ímpar.`);
    }
}
function questao2(){
    var anoNascimento = prompt('Digite seu ano de nascimento');
    var now = new Date();
    var anoAtual = now.getFullYear();

    if (anoAtual-anoNascimento < 18){
        alert('Você é menor de idade');
    }else{
        alert('Você é maior de idade');
    }
}
function questao3(){
    var metros = prompt('Informe o tamanho em metros para ser convertido em pés');
    var pes = metros*(0.3048);

    alert(`${metros}m são ${pes}ft`);
}
function questao4(){
    var valorEmprestimo = prompt('Informe o valor do empréstimo');
    var jurosAnual = prompt('Informe a taxa de juros anual');
    var anos = prompt('Informe o número de anos em que será pago');

    var jurosCompostos = valorEmprestimo * (1+(jurosAnual/100))**anos;
    alert(`o total a pagar (emprestimo+juros) será de ${jurosCompostos}`);
}
function questao5(){
    var ladoA = prompt('Informe o tamanho do lado A');
    var ladoB = prompt('Informe o tamanho do lado B');
    var ladoC = prompt('Informe o tamanho do lado C');

    if (ladoA == ladoB && ladoA == ladoC){
        alert('Equilátero');
    }else if (ladoA == ladoB || ladoA == ladoC){
        alert('O triangulo é Isósceles');
    }else{
        alert('O triangulo é Escaleno');
    }
}