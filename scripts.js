// cotação do dia 
const USD = 6.03
const EUR = 6.99
const GBP = 7.56

// incluindo os elementos do formulários
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById ("result")

// IMPUT AMOUNT PARA RECEBER SOMENTE NUMEROS .
amount.addEventListener("input", () => {
// {}
const hasCharactersRegex = /\D+/g
amount.value = amount.value.replace(hasCharactersRegex, "")
})
// submit do formulário. enviar informações
form.onsubmit = (event) => {
 event.preventDefault()

  switch (currency.value){
    case "USD":
       converTcurrency(amount.value, USD, "US$") 
         break
    case "EUR":
        converTcurrency(amount.value, EUR, "€")
         break
    case "GBP":
        converTcurrency(amount.value, GBP, "£")       
         break
  }

}
//FUNÇÃO DE CONVERSÃO DE MOEDA 
function converTcurrency(amount, price, symbol){
    try {
        //mostrando os valores 
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
      
      // calcular o total
      let total = amount * price 

      // trasformado o "." por ","
      if (isNaN(total)){
        return alert("Inserir o valor corretamente")
      }
    
      total = formatCurrencyBRL(total). replace("R$", "")

      //mostra o valor total 
      result.textContent =  `${total} Reais`

        //mostra o footer com o resultado
      footer.classList.add("show-result")
    } catch (error){
        //remove o footer removendo
      footer.classList.remove("show-result")

      console.log(error)
      alert("Não foi possível converter.Tente novamente daqui minutos.")

    }  
} 

function formatCurrencyBRL(value) {
    //converter para Reais
    return Number(value). toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
