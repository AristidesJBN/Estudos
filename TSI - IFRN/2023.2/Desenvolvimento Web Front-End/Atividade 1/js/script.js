function questao1(){
  let distancia = Number(prompt("Qual a distância percorrida em KM?"))
  let gasolina = Number(prompt("Quanto de gasolina foi gasta em litros?"))

  let gasto = distancia/gasolina
  alert(`Consumo de ${gasto}/L`)
}

function questao2(){
  let agora = new Date();
  alert(agora.toLocaleString('pt-BR', { timezone: 'UTC' }));
}

function questao3(){
  let MP = Number(prompt("Qual a média parcial"))
  let AF = Number(prompt("Qual a nota da avaliação final"))

  let MF = (MP+AF)/2
  alert(`A média final é ${MF}`)
}