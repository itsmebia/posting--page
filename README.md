# 📝 Blog Post Simulador - Projeto de Certificação 2

## 📄 Descrição do Projeto

Este projeto é uma aplicação web dinâmica que simula a criação de postagens em uma rede social ou blog. O diferencial deste desafio é a integração real com uma API externa (**JSONPlaceholder**), permitindo que o usuário envie dados através de um formulário e veja o resultado retornado pela API renderizado na tela em tempo real.

## ✨ Funcionalidades

*   **Entrada de Dados:** Formulário com campos para Título e Conteúdo (Textarea).
*   **Integração com API:** Uso da Fetch API para realizar requisições do tipo `POST`.
*   **Renderização Dinâmica:** O conteúdo retornado pela API é exibido imediatamente na página sem a necessidade de recarregamento.
*   **Feedback ao Usuário:** Indicador de "Enviando postagem..." e animações de transição.
*   **Semântica e Acessibilidade:** Uso correto de tags HTML5 e labels para melhor experiência.
*   **Design Moderno:** Interface inspirada em redes sociais contemporâneas, com foco em legibilidade e usabilidade.

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica.
*   **CSS3:** Estilização moderna e responsiva.
*   **JavaScript (ES6+):** Lógica de captura, envio e manipulação do DOM.
*   **JSONPlaceholder API:** Simulador de backend para testes de requisições.

## 🛠️ Como Funciona

1.  O usuário preenche o título e o conteúdo no formulário.
2.  Ao clicar em "Postar Agora", o JavaScript captura os valores e monta um objeto `data`.
3.  Uma requisição `POST` é enviada para `https://jsonplaceholder.typicode.com/posts`.
4.  A API retorna o objeto enviado (simulando a criação no banco de dados).
5.  O JavaScript recebe esse retorno e atualiza os elementos da seção de visualização.

## 📂 Estrutura de Arquivos

```text
.
├── README.md
├── index.html
├── style.css
└── script.js
```

## 🎨 Estilização

O projeto utiliza uma paleta de cores limpa:
*   **Azul (#1877f2):** Cor de destaque para botões e cabeçalhos.
*   **Cinza Claro (#f0f2f5):** Fundo da página para reduzir o cansaço visual.
*   **Branco (#ffffff):** Fundo dos cards para contraste.