<h1 align='center'> Ignite Coffee Delivery </h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Design](https://www.figma.com/file/r5LZ0xLfw6eRVj2U7gpfmA/Coffee-Delivery-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=2-12&mode=design&t=zZhymDSG5ji1M0D6-0)

  [🇧🇷 Português](#pt-br) / [🇬🇧 English](#en)

</div>

## <a id='pt-br' style='text-decoration: none; color: inherit;'>🇧🇷 Português</a>

### 📚 Sumário
- [❕ Sobre](#pt-br-sobre)
- [📖 Instruções](#pt-br-instrucoes)
  - [📥 Instalar](#pt-br-instalar)
  - [🚀 Rodar Localmente](#pt-br-localmente)
  - [📋 Rodar Testes Unitários](#pt-br-testes-unitarios)
  - [📔 Rodar Storybook](#pt-br-storybook)
- [📂 Estrutura](#pt-br-estrutura)

#### <a id='pt-br-sobre' style='text-decoration: none; color: inherit;'>❕ Sobre</a>
Esta é a minha implementação do desafio "Coffee Delivery" do segundo módulo de ReactJS do [Ignite](https://www.rocketseat.com.br/ignite), um curso intermediário e avançado de diversas linguagens de programação e tecnologias oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

Nela, foram implementadas as seguintes funcionalidades, que serão demonstradas em fotos e vídeos mais adiante:
##### **Tela inicial**
- **Listagem de cafés:** Exibe um catálogo de cafés para serem adicionados no carrinho
- **Escolher quantia:** Subtrai ou incrementa a quantia de cafés a serem adicionados no carrinho
##### **Tela do carrinho**
- **Modificar quantia:** Subtrai ou incrementa a quantia de cafés no carrinho
- **Remover cafés:** Remove cafés do carrinho
- **Endereço de entrega:** Informa o endereço em que irá receber sua entrega, informando o CEP outros campos são preenchidos automaticamente, como a rua, bairro, cidade e estado
- **Formas de pagamento:** Escolhe como irá pagar pela entrega, dentre as opções de cartão de crédito, débito e em dinheiro
##### **Tela de conclusão**
- **Confirmação do pedido:** Exibe um breve resumo de onde será entregue, a forma de pagamento e uma estimativa de tempo de entrega

#### <a id='pt-br-instrucoes' style='text-decoration: none; color: inherit;'>📖 Instruções</a>
##### <a id='pt-br-instalar' style='text-decoration: none; color: inherit;'>📥 Instalar</a>
Cole o 1º comando em um terminal aberto dentro da pasta de sua preferência para clonar o projeto, em seguida rode uma das versões do 2º comando para instalar as dependências
```sh
git clone https://github.com/mar-alv/ignite-coffee-delivery.git
npm i # Ou npm install
```

##### <a id='pt-br-localmente' style='text-decoration: none; color: inherit;'>🚀 Rodar Localmente</a>
Cole o comando em um terminal, a aplicação estará acessível através desse [link](http://localhost:5173)
```sh
npm run dev
```

##### <a id='pt-br-testes-unitarios' style='text-decoration: none; color: inherit;'>📋 Rodar Testes Unitários</a>
Cole o comando em um terminal, eles serão executados um após o outro apontando se houve testes falhos
```sh
npm run tests
```

##### <a id='pt-br-storybook' style='text-decoration: none; color: inherit;'>📔 Rodar Storybook</a>
Cole o comando num terminal, a documentação dos componentes do projeto estará acessível através desse [link](http://localhost:6006)
```sh
npm run storybook
```

#### <a id='pt-br-estrutura' style='text-decoration: none; color: inherit;'>📂 Estrutura</a>
```
│ .github/
│   └── ... imagens e gifs usados nesta documentação
│ .storybook/
│   └── ... arquivos que mantém o funcionamento do Storybook
│ .tests/
│   └── ... arquivos que mantém o funcionamento dos testes
│ src/
│   ├── assets/
│   │     └── ... imagens usadas
│   ├── components/
│   │     ├── contexto x/
│   │     │     ├── componente y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   │     └── ...
│   ├── contexts/
│   │     └── ... actions, contextos e providers
│   ├── enums/
│   │     └── ... enums usados
│   ├── interfaces/
│   │     └── ... interfaces usadas
│   ├── pages/
│   │     ├── página x/
│   │     │     ├── componente y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   ├── styles/
│   │     └── ... estilos globais e default
│   ├── utils/
│   │     └── ... funções utilitárias usadas
│   └── ...
│ stories/
│   ├── components/
│   │     ├── contexto x/
│   │     │     └── ... stories dos componentes
│   │     └── ...
│   ├── ... stories genéricos(cor, ícones e tipografia)
│   └── ... stories-utils.tsx // funções utilitárias pros stories
│ tests/
│   ├── contexto x/
│   |		  └── ... testes unitários
│   ├── ...
│   └── ... tests-utils.tsx // funções utilitárias pros testes
```

## <a id='en' style='text-decoration: none; color: inherit;'>🇬🇧 English</a>

### 📚 Summary
- [❕ About](#en-about)
- [📖 Instructions](#en-instructions)
  - [📥 Install](#en-install)
  - [🚀 Run Locally](#en-locally)
  - [📋 Run Unit Tests](#en-unit-tests)
  - [📔 Run Storybook](#en-storybook)
- [📂 Structure](#en-structure)

#### <a id='en-about' style='text-decoration: none; color: inherit;'>❕ About</a>
This is my implementation of the challenge project "Coffee Delivery" from the second ReactJS module of [Ignite](https://www.rocketseat.com.br/ignite), an intermediate and advanced course in various programming languages and technologies offered by [Rocketseat](https://www.rocketseat.com.br/).

It implements the following functionalities, which will be demonstrated in photos and videos later on:
##### **Home screen**
- **Coffee listing:** Shows a coffee catalog to be added to the cart
- **Choose amount:** Subtracts or increments the amount of coffees to be added to the cart
##### **Checkout screen**
- **Change amount:** Subtracts or increments the amount of coffees in the cart
- **Remove coffees:** Remove coffees from the cart
- **Delivery address:** Informs the address to receive the delivery, informing the CEP, other fields are automatically fulfilled, like street, neighborhood, city and state
- **Payment methods:** Choose what payment will be used for the delivery, between the options of credit card, debit card and cash
##### **Conclusion screen**
- **Delivery confirmation:** Shows a resume of where it will be delivered, the payment method and the time estimative

#### <a id='en-instructions' style='text-decoration: none; color: inherit;'>📖 Instructions</a>
##### <a id='en-instalar' style='text-decoration: none; color: inherit;'>📥 Install</a>
Paste the 1º command into a terminal opened within a folder of your preference to clone the project, then run one of the versions of the 2º command to install the dependencies
```sh
git clone https://github.com/mar-alv/ignite-coffee-delivery.git
npm i # Or npm install
```

##### <a id='en-locally' style='text-decoration: none; color: inherit;'>🚀 Run Locally</a>
Paste the command into a terminal, the application will be accessable through this [link](http://localhost:5173)
```sh
npm run dev
```

##### <a id='en-unit-tests' style='text-decoration: none; color: inherit;'>📋 Run Unit Tests</a>
Paste the command into a terminal, they will be exectued one after the other mentioning if there were failed tests
```sh
npm run tests
```

##### <a id='en-storybook' style='text-decoration: none; color: inherit;'>📔 Run Storybook</a>
Paste the command into a terminal, the project's components documentation will be accessible through this [link](http://localhost:6006)
```sh
npm run storybook
```

#### <a id='en-structure' style='text-decoration: none; color: inherit;'>📂 Structure</a>
```
│ .github/
│   └── ... images and gifs used in this documentation
│ .storybook/
│   └── ... files to keep Storybook working
│ .tests/
│   └── ... files to keep tests working
│ src/
│   ├── assets/
│   │     └── ... images used
│   ├── components/
│   │     ├── context x/
│   │     │     ├── component y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   │     └── ...
│   ├── contexts/
│   │     └── ... actions, contexts and providers
│   ├── enums/
│   │     └── ... used enums
│   ├── interfaces/
│   │     └── ... used interfaces
│   ├── pages/
│   │     ├── page x/
│   │     │     ├── component y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   ├── styles/
│   │     └── ... global styles and default theme
│   ├── utils/
│   │     └── ... util functions used
│   └── ...
│ stories/
│   ├── components/
│   │     ├── context x/
│   │     │     └── ... stories of the components
│   │     └── ...
│   ├── ... generic stories (color, icons e typography)
│   └── ... stories-utils.tsx // util functions for stories
│ tests/
│   ├── contexto x/
│   |		  └── ... unit tests
│   ├── ...
│   └── ... tests-utils.tsx // util functions for tests
```

## 🧰 Technologies
### Build Tools
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Documentation
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

### Front-end Framework
[![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-61DAFB?style=for-the-badge&logo=react-router&logoColor=white&color=red)](https://reactrouter.com/en/main)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### Styling
[![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-c4e456?style=for-the-badge&logo=phosphoricons&logoColor=black)](https://phosphoricons.com/)
[![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

### Utilities
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://react-hook-form.com/)

### Testing
[![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

## 📸 Screenshots and 🎥 Recordings
For a longer video demonstration click here and like my post on
<a href='https://www.linkedin.com/posts/marcelo-dos-santos-alvarez-474406180_my-code-solution-for-coffee-delivery-a-challenge-activity-7078453723521253376-7vWp/'>LinkedIn</a>

<div align='center'>

  ![home](./.github/home.gif)
  Home screen

</div>

<div align='center'>

  ![adding-coffee](./.github/adding-coffee.gif)
  Adding coffee

</div>

<div align='center'>

  ![removing-coffee](./.github/removing-coffee.gif)
  Removing coffee

</div>

<div align='center'>

  ![choosing-payment-method](./.github/choosing-payment-method.gif)
  Choosing payment method

</div>

<div align='center'>

  ![filling-delivery-address](./.github/filling-delivery-address.gif)
  Filling delivery address

</div>

<div align='center'>

  ![confirming-delivery](./.github/confirming-delivery.gif)
  Confirming delivery

</div>

<div align='center'>

  ![generic-stories](./.github/generic-stories.gif)
  Generic stories

</div>

<div align='center'>

  ![checkout-stories](./.github/checkout-stories.gif)
  Checkout stories

</div>

<div align='center'>

  ![common-stories](./.github/common-stories.gif)
  Common stories

</div>

<div align='center'>

  ![home-stories](./.github/home-stories.gif)
  Home stories

</div>

## Author
<div style='display: flex; align-items: center;'>
    <img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
    <div>
        <strong>Marcelo Alvarez</strong>
        <br>
        <em>Front-end Developer</em><br>
        <span>"Some AI generated funny quote here 😗"</span><br>
        <a href='https://www.linkedin.com/in/marcelo-dos-santos-alvarez-474406180/'>LinkedIn</a>
    </div>
</div>

## License
Licensed under [MIT](./LICENSE)
