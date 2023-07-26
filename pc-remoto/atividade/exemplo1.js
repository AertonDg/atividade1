let nome, anoDnascimento, anoActual, idade

nome = prompt("digite seu nome: ")
anoDnascimento = prompt("digite seu ano de nascimento ")
anoActual = prompt("digite o ano atual ")

anoDnascimento = parseInt(anoDnascimento)
anoActual = Number(anoActual)

idade = anoActual - anoDnascimento

document.write(`olá `, nome, ` sua idade é `, idade, ` anos`)