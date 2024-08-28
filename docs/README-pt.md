<h1 align='center'> Ignite Coffee Delivery </h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)

  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Design](https://www.figma.com/file/r5LZ0xLfw6eRVj2U7gpfmA/Coffee-Delivery-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=2-12&mode=design&t=zZhymDSG5ji1M0D6-0)

  [⬅️ Voltar](../README.md)

</div>

## 📚 Sumário
- [❕ Sobre](#about)
- [📖 Instruções](#instructions)
	- [📥 Instalar](#install)
	- [🚀 Rodar Localmente](#locally)
	- [📋 Rodar Testes Unitários](#unit-tests)
	- [📔 Rodar Storybook](#storybook)
- [📂 Estrutura](#structure)
- [🧰 Tecnologias](#technologies)
- [📸 Prints e 🎥 Gravações](#screenshots-prints)
- [👤 Autor](#author)
- [📄 Licença](#license)

### <a id='about' style='text-decoration: none; color: inherit;'>❕ Sobre</a>
Esta é a minha implementação do desafio "Coffee Delivery" do segundo módulo de ReactJS do [Ignite](https://www.rocketseat.com.br/ignite), um curso intermediário e avançado de diversas linguagens de programação e tecnologias oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

Nela, foram implementadas as seguintes funcionalidades, que serão demonstradas em fotos e vídeos mais adiante:
#### **Tela inicial**
- **Listagem de cafés:** Exibe um catálogo de cafés para serem adicionados no carrinho
- **Escolher quantia:** Subtrai ou incrementa a quantia de cafés a serem adicionados no carrinho
#### **Tela do carrinho**
- **Modificar quantia:** Subtrai ou incrementa a quantia de cafés no carrinho
- **Remover cafés:** Remove cafés do carrinho
- **Endereço de entrega:** Informa o endereço em que irá receber sua entrega, informando o CEP outros campos são preenchidos automaticamente, como a rua, bairro, cidade e estado
- **Formas de pagamento:** Escolhe como irá pagar pela entrega, dentre as opções de cartão de crédito, débito e em dinheiro
#### **Tela de conclusão**
- **Confirmação do pedido:** Exibe um breve resumo de onde será entregue, a forma de pagamento e uma estimativa de tempo de entrega

### <a id='instructions' style='text-decoration: none; color: inherit;'>📖 Instruções</a>
#### <a id='install' style='text-decoration: none; color: inherit;'>📥 Instalar</a>
Cole o 1º comando em um terminal aberto dentro da pasta de sua preferência para clonar o projeto
```sh
git clone https://github.com/mar-alv/ignite-coffee-delivery.git
```

Em seguida rode uma das versões do 2º comando para instalar as dependências
```sh
npm i
```
```sh
npm install
```

#### <a id='locally' style='text-decoration: none; color: inherit;'>🚀 Rodar Localmente</a>
Cole o comando em um terminal, a aplicação estará acessível através desse [link](http://localhost:5173)
```sh
npm run dev
```

#### <a id='unit-tests' style='text-decoration: none; color: inherit;'>📋 Rodar Testes Unitários</a>
Cole o comando em um terminal, eles serão executados um após o outro apontando se houve testes falhos
```sh
npm run tests
```

#### <a id='storybook' style='text-decoration: none; color: inherit;'>📔 Rodar Storybook</a>
Cole o comando num terminal, a documentação dos componentes do projeto estará acessível através desse [link](http://localhost:6006)
```sh
npm run storybook
```

### <a id='pt-br-estrutura' style='text-decoration: none; color: inherit;'>📂 Estrutura</a>
```
│ .github/
│   └── ...
│ .storybook/
│   └── ...
│ .tests/
│   └── ...
│ docs/
│   └── ...
│ src/
│   ├── assets/
│   │     └── ...
│   ├── components/
│   │     ├── contexto x/
│   │     │     ├── componente y/
│   │     │     │     └── ...
│   │     │     └── ...
│   │     └── ...
│   ├── contexts/
│   │     └── ...
│   ├── enums/
│   │     └── ...
│   ├── interfaces/
│   │     └── ...
│   ├── pages/
│   │     ├── página x/
│   │     │     ├── componente y/
│   │     │     │     └── ...
│   │     └──   └── ...
│   ├── styles/
│   │     └── ...
│   ├── utils/
│   │     └── ...
│   └── ...
│ stories/
│   ├── components/
│   │     ├── contexto x/
│   │     │     └── ...
│   │     └── ...
│   ├── ...
│   └── ...
│ tests/
│   ├── contexto x/
│   |		  └── ...
│   └── ...
```

## <a id='technologies' style='text-decoration: none; color: inherit;'>🧰 Tecnologias</a>
### Build
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Documentação
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

### Framework Front-end
[![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-61DAFB?style=for-the-badge&logo=react-router&logoColor=white&color=red)](https://reactrouter.com/en/main)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### Estilização
[![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-c4e456?style=for-the-badge&logo=phosphoricons&logoColor=black)](https://phosphoricons.com/)
[![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

### Testes
[![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

### Utilidades
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://react-hook-form.com/)

## <a id='screenshots-prints' style='text-decoration: none; color: inherit;'>📸 Prints e 🎥 Gravações</a>
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

## <a id='author' style='text-decoration: none; color: inherit;'>👤 Autor</a>
<div style='display: flex; align-items: center;'>
		<img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
		<div>
				<strong>Marcelo Alvarez</strong>
				<br>
				<em>Front-end Developer</em><br>
				<span>"Uma citação engraçada gerada por IA aqui 😗"</span><br>
				<a href='https://www.linkedin.com/in/mar-alv'>
					<img
						alt='LinkedIn'
						src='https://img.shields.io/badge/LinkedIn-Marcelo%20Alvarez-0077B5?logo=linkedin&logoColor=white'
					/>
				</a>
				<a href='https://mar-alv.github.io/'>
					<img
						alt='Portfolio'
						src='https://img.shields.io/badge/Portfolio-Marcelo%20Alvarez-000?style=flat&logo=portfolio&logoColor=white'
					/>
				</a>
		</div>
</div>

## <a id='license' style='text-decoration: none; color: inherit;'>📄 Licença</a>
Licenciado via [MIT](../LICENSE)
