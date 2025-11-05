
// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const main = document.querySelector("main")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Objeto para armazenar as cotações em tempo real.
let exchangeRates = {}

// Função para buscar cotações.
async function fetchExchangeRates() {
// Ativa o estado de carregamento.
main.classList.add("loading-state")
footer.classList.add("show-result")
description.textContent = "Buscando cotações em tempo real..."

   try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL,ETH-BRL,SOL-BRL')

        if (!response.ok) {
            throw new Error(`HTTP error! Status: $${response.status}`)
        }

        const data = await response.json()

        // Armazena as cotações no objeto global
        exchangeRates = {
            USD: parseFloat(data.USDBRL.bid),
            EUR: parseFloat(data.EURBRL.bid),
            GBP: parseFloat(data.GBPBRL.bid),
            BTC: parseFloat(data.BTCBRL.bid),
            ETH: parseFloat(data.ETHBRL.bid),
            SOL: parseFloat(data.SOLBRL.bid),
        }

        description.textContent = "Cotações atualizadas!"

   } catch (error) {
    console.error("Erro ao buscar cotações:", error)
    description.textContent = "Erro ao carregar! Usando cotações de fallback."

    // Valores de fallback caso a API falhe
    exchangeRates = {USD: 5.38, EUR: 5.80, GBP: 6.50,
                    BTC: 550000.00, ETH: 18300.00, SOL: 160.00
    }
   } finally {
    // Desativa o estado de carregamento após a conclusão.
        setTimeout(() => {
            main.classList.remove("loading-state")
            footer.classList.remove("show-result")
        }, 1500)
    }

}

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

    let price;
    let symbol;

    switch (currency.value) {
        case "USD":
            price = exchangeRates.USD 
            symbol = "US$"
            break
        case "EUR":
            price = exchangeRates.EUR
            symbol = "€"
            break
        case "GBP":
            price = exchangeRates.GBP
            symbol = "£"
            break
        case "BTC":
            price = exchangeRates.BTC
            symbol = "₿" // Símbolo do Bitcoin (opcional, pode usar 'BTC')
        break 
        case "ETH":
            price = exchangeRates.ETH
            symbol = "Ξ" // Símbolo do Ethereum (opcional, pode usar 'ETH')
        break
        case "SOL":
            price = exchangeRates.SOL
            symbol = "◎" // Símbolo do Solana (opcional, pode usar 'SOL')
        break       
    }

    if (!price || isNaN(price)) {
         return alert("Erro: Cotação da moeda não disponível. Tente recarregar a página.")
    }

    convertCurrency(amountValue, price, symbol)

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

fetchExchangeRates()
