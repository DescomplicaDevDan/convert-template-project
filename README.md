# 🚀 Conversor de Moedas DeFi

Um conversor de moedas moderno e responsivo, focado em câmbio entre moedas fiduciárias (fiat) e criptomoedas (crypto), com um design dark e futurista (DeFi/Cyberpunk).

---

## 🌟 Visão Geral e Funcionalidades

Este projeto transforma um conversor simples em uma ferramenta robusta, integrando cotações em tempo real e um design que valoriza a experiência do usuário em ambientes escuros.

### Características Principais:

* **Cotações em Tempo Real:** Utiliza a API `AwesomeAPI` para buscar cotações em tempo real.
* **Cobertura Ampla:** Suporte para moedas Fiduciárias (USD, EUR, GBP, **ARS, CNY, JPY**) e Criptomoedas (BTC, ETH, SOL).
* **Design Dark/DeFi:** Estilo coeso com fundo de grade geométrica, cores de destaque Neon (Roxo e Ciano) e tipografia moderna.
* **Responsividade:** Layout otimizado para se adaptar a diferentes tamanhos de tela.
* **UX Aprimorada:** Feedback visual de carregamento (`loading-state`) e tratamento de erros (futuramente com modais customizados).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3** (com variáveis customizadas para o tema dark)
* **JavaScript (ES6+)**
* **API:** [Economia AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas) para cotações.

---

## ⚙️ Mudanças e Desenvolvimento Recente

As seguintes mudanças foram implementadas para expandir a funcionalidade e melhorar a estética:

### 1. Expansão de Moedas

* Adicionado suporte completo para **Peso Argentino (ARS)**, **Yuan Chinês (CNY)** e **Yen Japonês (JPY)**.
* Atualizada a função `fetchExchangeRates` e o `switch` de conversão para integrar as novas moedas e seus símbolos.

### 2. Correção de Estabilidade (API)

* Corrigido o erro na URL de busca da API, garantindo o carregamento correto das cotações em tempo real. Implementado fallback de cotações para resiliência.

### 3. Melhorias de Design (Harmonia Visual - A Ser Finalizado)

* **Fundo:** Implementado `background-size: cover;` para o fundo de grade futurista, garantindo que a imagem preencha toda a tela sem repetição.
* **Harmonia de Cores:** Ajustadas as cores de fundo do `form` e `footer` para criar uma peça única e escura, alinhada com o tema Dark/DeFi.
* **Alinhamento do Footer (Pendência Resolvida):** Corrigido o `padding` inconsistente e o `background-color` do `footer` para garantir alinhamento perfeito com as laterais do conversor (`main`).

---

## 🏃 Como Rodar o Projeto

1.  Clone este repositório: `git clone https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github`
2.  Abra a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador (ou use uma extensão de servidor local como o Live Server no VS Code).
