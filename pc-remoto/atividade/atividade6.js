function Promocao(descricao, preco) {
    const Promocional = preco * 0.5; 
    const Total = Promocional * 3; 
  
    alert(`Produto: ${descricao}`);
    alert(`Preço: R$ ${preco.toFixed(2)}`);
    alert(`Promoção: Leve 3 unidades por R$ ${Total.toFixed(2)}!`);
  }
  
  const descricaoProduto = prompt("Digite a descrição:");
  const precoProduto = parseFloat(prompt("Digite o preço:"));
  
  Promocao(descricaoProduto, precoProduto)