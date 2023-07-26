function ValorPago(Uso, valor15min) {
  
 
    const tempo = Math.ceil(Uso / 15);
      
     
    return tempo * valor15min;
    }
    
    const valor15min = parseFloat(prompt("Digite o valor a ser cobrado a cada 15 minutos de uso:"));
    const tempoCliente = parseFloat(prompt("Digite o tempo de uso do cliente em minutos:"));
    const valorPago = valorPago(tempoCliente, valor15min);
    
    alert(`O valor pago pelo cliente: R$ ${valorPago.toFixed(2)}`);