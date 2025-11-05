// Cotação das moedas do dia.
const USD = 5.39
const EUR = 6.20
const GBP = 7.03

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números e o ponto decimal.
amount.addEventListener("input", () => {
   const hasCharactersRegex = /[^0-9.]/g
   amount.value = amount.value.replace(hasCharactersRegex, "")

   // Lógica para garantir que só haja um ponto decimal.
   const parts = amount.value.split('.')

   if (parts.length > 2) {
        // Se houver mais de um ponto, remove os extras (mantendo o primeiro).
        amount.value = parts[0] + '.' + parts.slice(1).join('')
    }

})

// Captando o evento que submit (enviar) do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    // Conversão da String para número Decimal (Float).
    const amountValue = parseFloat(amount.value)

    // Validaão aprimorada.
    if (isNaN(amountValue) || amountValue <= 0) {
        footer.classList.remove("show-result")
        return alert("Por favor, digite um valor número válido maior que zero para converter.")
    }

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break       
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total.
        let total = (amount * price)

        // Verifica se o resultado não é um número.
        if (isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        // Formatar o valor total.
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total.
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)

        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }

}
// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
    /* Converte para número para utilizar o toLocaleString para formatar no padrão BRL
    (R$ 00,00)*/
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
