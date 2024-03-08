
// new Array(); = função construtora {informalmente: Classe}

const pessoa = { nome: "Neto"};

pessoa["nome"]

for (let propriedade in pessoa){
    console.log(pessoa[propriedade]);
}

const vetor5 = new Array(10).fill(0);
console.log(vetor5);
vetor5.fill(1);
console.log(vetor5);

const vetor6 = [0, 1, 2, 3, 4, "último"];
console.log(vetor6.at(-1));

//for < vetor.lenght
///
vetor6.forEach(function(valor){console.log(valor)});
///
vetor6.forEach(valor => console.log(valor));
///
for (let elemento of vetor6){
    console.log(elemento)
}
///

//164

// push := insere no final // pop := retira o último // unshift := insere no inicio // shift := retira o primeiro elemento


//terminar em casa {

class Vetor {
    constructor(vetor){
        this.vetor = vetor;
        console.log("construtor foi chamado");
    }

    push() {
        let tamanhoVetor = this.vetor.lenght
        for (let i = 0; i < tamanhoVetor; i++){
            console.log(`${this.vetor} está caminhando...`)
        }
    }
}

let novoVetor = new Vetor(1, 2, 3);
novoVetor.push();
//}
