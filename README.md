# E-commerce Angular Project

Bem-vindo ao **E-commerce do Paulão**! Este é um projeto de e-commerce desenvolvido usando Angular e Angular Material. A aplicação apresenta uma interface moderna e responsiva, com componentes standalone para maior eficiência.

![tela inicial](src/assets/images/home.png)

---

## 🛠️ Tecnologias Utilizadas

- **Angular** (versão mais recente)
- **Angular Material** - para componentes estilizados e UI moderna
- **TypeScript** - para tipagem e desenvolvimento de aplicações escaláveis
- **HTML5 e CSS3** - estruturação e estilização de páginas
- **Node.js** - para execução do servidor local

---

![home 2](src/assets/images/home2.png)


## 🎯 Objetivos do Projeto

O objetivo deste projeto é criar uma aplicação de e-commerce funcional, responsiva e amigável ao usuário com uma arquitetura modular e boas práticas em Angular. Os usuários podem navegar pelos produtos, adicionar itens ao carrinho, finalizar compras e visualizar um resumo do pedido.

---

## 🏷️ Funcionalidades

- **Home com Produtos em Destaque:** Exibição de produtos destacados na página inicial.
- **Carrinho de Compras:** Adição, remoção e visualização dos produtos selecionados.
- **Checkout Completo:** Coleta de informações do usuário para finalizar o pedido.
- **Resumo do Pedido:** Exibição de detalhes do pedido após a finalização.
- **Detalhes do Produto:** Página detalhada para cada produto com informações específicas.
- **Uso de Angular Material:** Interface moderna usando componentes como `mat-card`, `mat-button` e `mat-dialog`.
- **Validações de Formulário:** Validação de campos obrigatórios e formatação.
- **Efeito de Zoom nas Imagens:** Imagens de produtos com efeito de aumento suave ao passar o mouse.
- **Trailer de Produtos:** Exibição de trailers de produtos no YouTube com a URL sanitizada para maior segurança.

---

![produtos](src/assets/images/produtos.png)


## 🔧 Configuração do Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) e o [Angular CLI](https://angular.io/cli) instalados.

### Como Configurar

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/ecommerce-angular.git
   cd ecommerce-angular

2. Instale as dependências:
   
```bash
npm install
```

3. Execute a aplicação em modo de desenvolvimento:

bash
Copiar código
ng serve
O servidor será iniciado em http://localhost:4200/.

![detalhes](src/assets/images/detalhes.png)


## 📂 Estrutura do Projeto
```
ecommerce-angular/
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.css
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── order-summary/
│   │   ├── product-detail/
│   │   ├── services/
│   │   │   ├── cart.service.ts
│   │   │   ├── product.service.ts
│   │   │   └── order.service.ts
│   │   └── ...
│   ├── assets/
│   │   └── images/ (imagens usadas na aplicação)
│   └── index.html (ponto de entrada principal)
└── ...
```
## 🚀 Funcionalidades em Detalhes
1. Home
- Exibe produtos em destaque.
- Imagem de banner com texto sobreposto.
- Botões para detalhes dos produtos.
2. Carrinho
- Adição de produtos.
- Remoção de produtos.
- Visualização dinâmica do valor total do carrinho.
3. Checkout
- Formulário de checkout com validações.
- Diferentes opções de pagamento.
- Feedback visual ao finalizar a compra.
4. Resumo do Pedido
- Detalhamento dos produtos comprados.
- Resumo do valor total.
- Exibição das informações fornecidas pelo usuário.
5. Detalhes do Produto
- Descrição completa dos produtos.
- Imagem, preço, gênero, desenvolvedor, ano de lançamento, avaliação, e trailer do produto.

---
![loguin](src/assets/images/loguin.png)

## 📸 Imagens
- Página Inicial

---

## 📚 Bibliotecas e Dependências
- Angular Material - Biblioteca de componentes para UI moderna.
- @angular/router - Roteamento para navegação entre páginas.
- TypeScript - Linguagem para o desenvolvimento da aplicação.
- RxJS - Biblioteca para programação reativa
  
---

![checkout](src/assets/images/checkout.png)


## 📜 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

## ✨ Contribuindo
Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

![resumo](src/assets/images/resumo.png)

Faça um fork do repositório.
1. Crie uma nova branch (git checkout -b feature/sua-feature).
2. Commit suas mudanças (git commit -m 'Adicione sua mensagem').
3. Push para a branch (git push origin feature/sua-feature).
4. Abra um Pull Request.

## Feito com ❤️ por Paulo Dias.

