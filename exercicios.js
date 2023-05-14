// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt("Digite o valor da altura do retângulo")
  let largura = prompt("Digite o valor da largura do retângulo")
  console.log(altura * largura)
  return
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Digite o ano atual")
  let anoDeNascimento = prompt("Digite o seu ano de nascimento")
  console.log(anoAtual - anoDeNascimento)
  return
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite o seu nome")
  let idade = prompt("Digite a sua idade")
  let email = prompt("Digite o seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  return
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corFavorita1 = prompt("Digite sua cor favorita")
  let corFavorita2 = prompt("Digite sua segunda cor favorita")
  let corFavorita3 = prompt("Digite sua terceira cor favorita")
  let coresFavoritas = [corFavorita1, corFavorita2, corFavorita3]
  console.log(coresFavoritas)
  return
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  //custo - qntdIngressosVendidos * valorIngresso = 0
  //qntdIngressosVendidos = custo / valorIngresso
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const verificarTamanho = string1.length === string2.length
  return verificarTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let tamanhoArray = array.length - 1
  return array[tamanhoArray]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroElemento = array[0]
  let tamanhoArray = array.length - 1
  let ultimoElemento = array[tamanhoArray]
  array[0] = ultimoElemento
  array[tamanhoArray] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let verficarIgualdade = string1.toLowerCase() === string2.toLowerCase()
  return verficarIgualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Digite o ano atual.") 
  const anoDeNascimento = prompt("Digite o seu ano de nascimento.")
  let anoEmissaoIdentidade = prompt("Digite o ano em que sua carteira de identidade foi emitida")
  let idade = anoAtual - anoDeNascimento
  let idadeCarteiraIdentidade = anoAtual - anoEmissaoIdentidade
  let renovacao = false
  if(idade <= 20){
    if(idadeCarteiraIdentidade >= 5){
      renovacao = true
    }
  }
  else if(idade > 20 && idade <= 50){
    if(idadeCarteiraIdentidade >= 10){
      renovacao = true
    }
  }
  else if(idade > 50){
    if(idadeCarteiraIdentidade >= 15){
      renovacao = true
    }
  }
  console.log(renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let bissexto = false
  if(ano % 400 === 0){
    bissexto = true
  }
  if(ano % 4 === 0){
    if((ano % 100 === 0 && ano % 400 !== 0)){
      bissexto = false
    }
    else{
      bissexto = true
    }
  }
  return bissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const valido = "sim"
  let maioridade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você completou o ensino médio?")
  let disponibilidadeHoraria = prompt("Você possui disponibilidade durante os horarios de aula?")
  let inscricaoValida = false
  if(maioridade === valido && ensinoMedio === valido && disponibilidadeHoraria === valido){
    inscricaoValida = true
  }
  console.log(inscricaoValida)
}