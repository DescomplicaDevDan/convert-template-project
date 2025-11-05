# 🚀 Currency Converter App

Um conversor de moedas moderno e responsivo que utiliza dados em tempo real para calcular a conversão entre as principais moedas fiduciárias (USD, EUR, GBP) e criptomoedas (BTC, ETH, SOL) para o Real Brasileiro (BRL).

---

## ✨ Funcionalidades

* **Cotações em Tempo Real:** Utiliza a **AwesomeAPI** para buscar os valores de câmbio mais recentes.
* **Suporte a Múltiplas Moedas:** Converte **Dólar (USD), Euro (EUR), Libra (GBP), Bitcoin (BTC), Ethereum (ETH)** e **Solana (SOL)**.
* **Validação de Input:** Aceita corretamente valores decimais (com ponto) e impede a entrada de caracteres inválidos.
* **Feedback Visual:** Exibe um estado de *loading* animado enquanto busca as cotações da API.
* **Fallback:** Possui cotações de segurança (hardcoded) para o caso de a API falhar.

---

## 🛠️ Tecnologias Utilizadas

O projeto é baseado puramente em tecnologias *front-end* padrão:

* **HTML5:** Estrutura semântica do aplicativo.
* **CSS3:** Estilização, layout responsivo e animações (`@keyframes` para o estado de loading).
* **JavaScript (ES6+):** Lógica de conversão, manipulação do DOM e chamadas assíncronas à API (`fetch`).

### 🌐 API de Câmbio

* **AwesomeAPI:** Utilizada para obter dados atualizados de moedas e criptomoedas.

---

## 💻 Como Executar Localmente

Siga estas etapas para rodar o projeto na sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [SUA_URL_DO_GITHUB]
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd currency-converter-app
    ```
3.  **Abra o arquivo:**
    Simplesmente abra o arquivo `index.html` em qualquer navegador.
    *(Este projeto não requer servidor back-end, apenas um navegador.)*

---

## 🤝 Contribuição e Deploy

Este projeto foi desenvolvido de forma incremental com foco em boas práticas de Git e JavaScript moderno.

* **Deploy:** O projeto está atualmente hospedado e em *deploy* contínuo pela **Vercel**.
* **Commits:** Utilizam a convenção de nomenclatura (ex: `feat:`, `fix:`, `style:`).

Feito com 💚 por **DescomplicaDevDan**
