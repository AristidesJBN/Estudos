function inverterArray(array){
    tamanho = array.length;
    for (let i = 0; i < tamanho/2; i++){
        let indiceInverso = ((tamanho -1) - i);
        let cache1 = array[i];
        let cache2 = array[indiceInverso];
        array[indiceInverso] = cache1;
        array[i] = cache2;
    }
    return array
};

array = [1, 2, 3, 4, 5];
console.log(array);
console.log(inverterArray(array));

function somaMaior(array){
    let maxTotal = array[0];
    let maxAtual = array[0];
    tamanho = array.length;
    for (let i = 1; i < tamanho; i++){
        if (array[i] + maxAtual > array[i]){
            maxAtual = maxAtual + array[i];
        }
        if (maxAtual > maxTotal){
            maxTotal = maxAtual;
        }
    }
    return maxTotal;
}

array = [3, 4, -1, -3];
console.log(somaMaior(array)); //tudo errado

