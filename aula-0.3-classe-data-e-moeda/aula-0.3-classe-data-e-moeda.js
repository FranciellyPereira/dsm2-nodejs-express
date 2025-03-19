class Carro { //Nomes de classes devem iniciar com a primeira letra maiuscula.
    //Atributos
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano

    }
    // Método
    buzinar() {
        return "Beep! Beep!"
    }
}
// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012")
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano}`)

// Instância carrosportivo
const carroEsportivo = new Carro()
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = "2024"

console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e também faz ${carroEsportivo.buzinar()}`)

// Adicionando um novo atributo

carroEsportivo.corNeon = "Azul"

// Adicionando um novo

carroEsportivo.turbo =  function() {
    return "Vrummm! O carro está acelerando!!"
}

console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon de cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`)

///////////////////////////////////////////////////////////////////////////////////////
// MANIPULANDO DATAS NO JAVASCRIPT
const dataAtual = new Date ()
console.log(typeof(dataAtual))

// PEGANDO O DIA ATUAL
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}.`)

// PEGANDO O MÊS ATUAL
const mes = dataAtual.getMonth()+1
console.log(`Estamos no mês ${mes}.`)

// PEGANDO O ANO ATUAL
const ano = dataAtual.getFullYear()
console.log(`Ano atual ${ano}.`)

// ADICIONANDO DIAS, MESES E ANOS À DATA ATUAL
// ADICIONAR 10 DIAS Á DATA ATUAL:
dataAtual.setDate(dataAtual.getDate() + 10)

//EXIBE A NOVA DATA:
console.log(`Daqui a 10 dias será dia ${dataAtual.getDate()}.`)

// ADICIONAR 3 MESES Á DATA ATUAL
dataAtual.setMonth(dataAtual.getMonth() + 3)

//EXIBE A NOVA MÊS:
console.log(`Daqui a 3 meses será: ${dataAtual.getMonth() + 1}.`)

// ADICIONAR 2 ANOS Á DATA ATUAL
dataAtual.setFullYear(dataAtual.getFullYear() + 2)

//EXIBE O NOVO ANO:
console.log(`Daqui a 2 anos será: ${dataAtual.getFullYear()}.`)

//
let salario = 2500.30
console.log(salario)
// MOSTRANDO AS CASAS DECIMAIS
console.log(salario.toFixed(2))

//OCULTANDO AS CASAS DECIMAIS
console.log(salario.toFixed(0))

//ALTERANDO O MARCARDOR DA CASA DECIMAL
console.log(salario.toFixed(2).replace(".",","))

//Formatação de moedas
// Mostrando salário em REAL (R$)
console.log(
    salario.toLocaleString("pt-br", { style: "currency",
        currency: "USD"})
)

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario *0.176
salario.toLocaleString("en", { style: "currency",
    currency: "USD"})

    // Mostrando salário em EURO (EUR)
console.log(
    salario.toLocaleString("pt-br", { style: "currency",
        currency: "EUR"})
)

//////////////////////////////////
// FORMATAÇÂO DE STRING
const nome = "Francielly Cristina Pereira"

// ALTERANDO PARA LETRAS MAIÚSCULAS
console.log(nome.toUpperCase())

// ALTERANDO PARA LETRAS MINÚSCULAS
console.log(nome.toLowerCase())

//CONTANDO CARACTERES DE STRING
console.log(nome.length)
