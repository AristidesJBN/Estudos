class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        console.log("construtor foi chamado");
    }

    caminhar() {
        console.log(`${this.nome} está caminhando...`)
    }

    comer = function(){
        console.log(`${this.nome} está comendo...`)
    }

    ler = () => {
        console.log(`${this.nome} está lendo...`)
    }
}

let pessoa = new Pessoa("Neto", 21);
pessoa.caminhar();
pessoa.comer();
pessoa.ler();
