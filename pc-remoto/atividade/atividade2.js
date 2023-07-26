let veiculo, preco, entrada, parcelas

veiculo = prompt("qual o veiculo")
preco = prompt("qual o preço")

entrada = Math.round(preco /2)
parcelas = Math.round(entrada /12)

document.write(`um `, veiculo, `tem a entrada custando `, entrada,` e as parcelas de 12x de `, parcelas )