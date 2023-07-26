let consumoGRAMAS, precoKILO, valor
precoKILO = prompt("Qual o preço por Kg? ")
consumoGRAMAS = promptS("Qual o consumo em gramas? ")

valor = Math.round(consumoGRAMAS * precoKILO) /1000

document.write(`O valor a ser pago em `, consumoGRAMAS, ` gramas é de: R$`, valor)