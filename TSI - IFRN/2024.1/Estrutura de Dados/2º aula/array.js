// new Array(); = função construtora {informalmente: Classe}

const pessoa = { nome: "Neto"};

pessoa["nome"]

for (let propriedade in pessoa){
    console.log(pessoa[propriedade]);
}