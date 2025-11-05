---

## ⚙️ Mudanças e Desenvolvimento Recente

As seguintes mudanças foram implementadas para expandir a funcionalidade, corrigir problemas de estabilidade e garantir um design coeso e responsivo em todos os dispositivos:

### 1. Expansão de Moedas

* Adicionado suporte completo para **Peso Argentino (ARS)**, **Yuan Chinês (CNY)** e **Yen Japonês (JPY)**.
* Atualizada a função `fetchExchangeRates` e o `switch` de conversão para integrar as novas moedas e seus símbolos.

### 2. Correção de Estabilidade (API)

* Corrigido o erro na URL de busca da API, garantindo o carregamento correto das cotações em tempo real.
* Mantido o fallback de cotações para resiliência quando a API falhar.

### 3. Design e Responsividade (Concluído) 🎨

* **Responsividade Total:** Implementadas **Media Queries** para garantir que o layout se ajuste perfeitamente em dispositivos móveis (telas abaixo de 540px), tornando o conversor totalmente utilizável em celulares.
* **Harmonia Visual do Footer:** Corrigido o problema de desalinhamento lateral do `footer`. O `padding` foi sincronizado com o `form` e o `background-color` unificado, fazendo com que o `footer` pareça uma peça única com o resto da caixa do conversor.
* **Fundo:** Implementado `background-size: cover;` para o fundo de grade futurista, garantindo que a imagem preencha toda a tela.

---
