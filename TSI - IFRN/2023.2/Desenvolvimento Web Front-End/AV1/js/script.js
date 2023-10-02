function questao1(){

    var x1 = Number(prompt('Insira o valor de x1'));
    var x2 = Number(prompt('Insira o valor de x2'));
    var y1 = Number(prompt('Insira o valor de y1'));
    var y2 = Number(prompt('Insira o valor de y2'));

    //dAB = √(x2 - x1)² + (y2 - y1)²
    var dAB = Math.sqrt(((x2 - x1)*(x2 - x1))+((y2 - y1)*(y2 - y1)));
    alert(`a distância entre dois pontos (x1, y1) e (x2, y2) é ${dAB}`);
}

function questao2(){
    var conceito; 
    var nota = Number(prompt('Insira a nota de 0.0 à 100.0'));
    if (nota < 0 || nota > 100){
        alert('Nota inválida, precisa ser de 0.0 à 100.0')
        questao2();
    }else if (nota >= 85){
        conceito = 'A';
    }else if (nota >= 70){
        conceito = 'B';
    }else if (nota >= 50){
        conceito = 'C';
    }else if (nota >= 30){
        conceito = 'D';
    }else{
        conceito = 'E';
    }
    alert(`O conceito foi: ${conceito}`);
}
function questao3(){
    var i = 1;
    var cont = 0;

    function jogarDado(){
        while (i <= 1000){
            d6 =  Math.floor(1 + Math.random() * 6);
            console.log(d6)
            if (d6 == 6){
                cont++
            }
            i++
        }   
        alert(`O dado caiu ${cont} vezes no 6`)
    }
    
    jogarDado();
}
function questao4(){
    function gerarSenha(frase){


        let i = 0;
        const tamanho_frase = frase.length;
        var novaSenha = "";
        var novoChar;
    
        while (i < tamanho_frase){

            var char = frase.charAt(i);
            
            if (i == 0){
                char = char.toUpperCase();
                novaSenha += char;
            }else{
                novoChar = criptografa(char);
                novaSenha += novoChar;
                console.log(char);
                console.log(novaSenha);
            }
            i++
        }
        alert(novaSenha)
    }
    
    function criptografa(char){
        char = char.toLowerCase();
            
        switch (char) {
            case "a": case "à": case "â": case "ã":
                return novoChar = "@";
            case "e": case "é": case "ê":
                return novoChar = "3";
            case "i": case "í":
                return novoChar = "1";
            case "o": case "ó": case "ô":
                return novoChar = "0";
            case "u": case "ú":
                return novoChar = "4";
            case " ":
                return novoChar = "_";
            default:
                return novoChar = char;
        }
    }
    
    var frase = prompt("Digite a frase:")
    gerarSenha(frase);
}

