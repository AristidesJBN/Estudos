class No {
    constructor(dado) {
        this.dado = dado;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    adicionarInicio(dado) {
        const novoNo = new No(dado);
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
    }

    adicionarFim(dado) {
        const novoNo = new No(dado);
        if (this.cabeca === null) {
            this.cabeca = novoNo;
            return;
        }
        let atual = this.cabeca;
        while (atual.proximo !== null) {
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
    }

    removerInicio() {
        if (this.cabeca !== null) {
            this.cabeca = this.cabeca.proximo;
        }
    }

    buscar(dado) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.dado === dado) return true;
            atual = atual.proximo;
        }
        return false;
    }

    imprimir() {
        let atual = this.cabeca;
        while (atual !== null) {
            console.log(atual.dado);
            atual = atual.proximo;
        }
    }
}

let lista = new ListaEncadeada();

lista.adicionarInicio(1); // Adiciona 1 no início da lista
lista.adicionarFim(2); // Adiciona 2 no fim da lista
lista.imprimir(); // Imprime 1, 2
lista.removerInicio(); // Remove o nó do início (1)
lista.imprimir(); // Imprime 2
