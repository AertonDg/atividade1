let titulo, duracao, duracaoHoras

titulo = prompt("digite o nome do filme:")
duracao = prompt("digite o tempo do filme em minutos:")

duracaoHoras = duracao / 60

document.write(`o filme ` , titulo, ` tem a duração de `, duracaoHoras, ` horas`)