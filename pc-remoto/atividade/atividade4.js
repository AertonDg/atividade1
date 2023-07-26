const nome = prompt("Qual o nome do medicamento");
const preçomed = parseInt(prompt("preço do medicamento"));

const preçoMed = preçomed
const valorPromoção = (preçomed*2) - ((preçomed*2) % 1);




alert (`O valor do medicamento ${nome} levando 2 fica ${valorPromoção.toFixed(2)}`)