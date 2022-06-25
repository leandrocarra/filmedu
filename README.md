<div align="center">
<br>
  <img src="./src/compound/logo.png" alt="wallet" width="120">
<br>
</div>

<p>
 <a href="#-sobre-o-projeto">Sobre</a>
</p>
<p>
 <a href="#-funcionalidades">Funcionalidades</a>
</p>
<p>
 <a href="#-layout">Layout</a>
</p>
<p>
 <a href="#-como-executar-o-projeto">Como executar</a>
</p>
<p>
 <a href="#-tecnologias">Tecnologias</a>
</p>
<p>
 <a href="#-contribuidores">Contribuidores</a>
</p>
<p>
 <a href="#-considerações">Considerações</a>
</p>
<p>
 <a href="#-autor">Autor</a>
</p>

## 💻 Sobre o projeto

FILMEDU

O <b>FILMEDU</b> veio para revolucionar o mercado de streaming atual, atingindo em cheio o publico mais jovem e que adora um filme com pipoca.</p>

---

## ⚙️ Funcionalidades

- [x] Home:

  - [x] Pagina "mostruario" com o principal de mostrar o que está no hype

- [x] Detalhe:

  - [x] Pagina responsavel por dar detalhes sobre o filme

- [x] Resultado de busca:

  - [x] Pagina responsável por mostrar o resultado da busca feita no topo

---

## 🎨 Layout

Pode se ver o prototipo que desenhei aqui nesse [Figma](https://www.figma.com/file/TklMiTsASkmwWIvFAJvCw4/Logo-FILMEDU?node-id=0%3A1)

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="home" title="#home" src="./src/compound/home.png" width="100%">
  <img alt="home-fill" title="#uhome-fill" title="#home" src="./src/compound/naboca.png" width="100%">
  
</p>

### Mobile

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="home" title="#home" src="./src/compound/homeMobile.png" width="250px">
  <img alt="home-fill" title="#home-fill" src="./src/compound/detailMobile.png" width="250px">
</p>

---

## 🚀 Como executar o projeto

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[NodeJS](https://nodejs.org/en/). Para ajudar, recomendo um bom editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Adquira o repositorio do projeto

```bash

# Clone este repositório
$ git clone https://github.com/leandrocarra/filmedu.git


```

#### 🎲 Configurando

```bash

# Abra o projeto em um editor ou cmd na pasta filmedu
$ cd filmedu

# Instale as dependências do projeto
$ yarn

💡 Certifique-se de estar na raiz do projeto (pasta filmedu) para executar
o comando yarn

```

#### 🎲 Executando a aplicação

```bash

# Rode seguinte comando no terminal
$ yarn start


```

<p>✅ Pronto, o app estará rodando no host: (http://localhost:3000/)</p>

---

<!-- ## 🚀 Como executar os testes

Para os testes utilizamos o <b>Jest</b> e para roda-lo é bem simples:

#### 🎲 Executando os testes

```bash

# Rode seguinte comando no terminal
$ yarn test


```

#### 🎲 Executando os testes com coverage

```bash

# Rode seguinte comando no terminal
$ yarn test:coverage

```

--- -->
<!-- 
## :cloud: Disponivel na web

O FILMEDU também disponivel na web, para encontra-lo basta acessar o seguinte
endereço na web:

[Site filmedu](https://leandrocarra.github.io/filmedu//)

--- -->

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Filmedu** ([React](https://reactjs.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[SCSS](https://sass-lang.com/)**
- **[Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)**
- **[Axios](https://axios-http.com/ptbr/docs/intro)**
- **[Loadash](https://lodash.com/)**
- **[Jest](https://jestjs.io/)**
- **[Eslint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**
- **[GitHub Actions](https://docs.github.com/pt/actions)**
- **[Yarn](https://yarnpkg.com/)**
- **[Yup](https://github.com/jquense/yup)**
- **[ContextApi](https://pt-br.reactjs.org/docs/context.html)**

> Veja o arquivo [package.json](https://github.com/leandrocarra/filmedu/blob/main/package.json)

---

## 👨‍💻 Considerações

* Optei por não usar Redux e sim ContextAPI como gerenciador de estado nesse projeto, pelo fato de contextApi estar substituindo aos poucos o redux.
* Infelizmente não consegui realizar os testes, pois meu filho pegou conjuntivite e fiquei sem tempo devido ao prazo.
* Optei por utilizar o Scss ao invez de Styled Components, pensando em criar uma lib para esse projeto num futuro proximo, pois o mesmo poderia ser usado em outras linguages
* Estarei colocando em produção em breve, mas primeiro vou pegar com vcs a permissão para isso, não são todas as empresas que permitem.
* O repo ficará publico por 1 semana, devido a ser um teste, não seria interessante o git indexar.
* Mesmo não sendo requisito, fiz o site responsivo.
* Mesmo não sendo requisito criar uma identidade para o teste, podem ver nesse [link](https://www.figma.com/file/TklMiTsASkmwWIvFAJvCw4/Logo-FILMEDU?node-id=0%3A1)

---

## 👨‍💻 Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/leandrocarra"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/6805211?v=4" width="100px;" alt=""/><br /><sub><b>Leandro Carra</b></sub></a><br /><a href="https://github.com/leandrocarra" >👨‍🚀</a></td>
  </tr>
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://www.linkedin.com/pulse/como-contribuir-em-um-projeto-open-source-github-f%C3%A1bio-amaral/?originalSubdomain=pt)

---

## 🦸 Autor

Desenvolvedor apaixonado por programação e tecnologias.

<a href="https://github.com/leandrocarra">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/6805211?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Leandro Carra</b></sub></a> <a href="https://github.com/leandrocarra" title="GitHub leandro">🚀</a>
 <br />

---
