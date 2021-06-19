<p align="center">
  <a href="https://github.com/he4rt/4noobs" target="_blank">
    <img src="../../assets/global/header-4noobs.svg">
  </a>
</p>

# Next.js

> Vá ponto a ponto ou vá direto ao que você está buscando! :
>
> 1. [O que é o Next.JS?](#nextjs-onde-vivem-o-que-comem)
> 1.2 [Por quê usar Next.JS?](#nextjs-why)
> 2. [Se é framework, logo é difícil? Não é bem assim.](#framework)
> 3. [Modelos de Renderização](#renderizacao)
> 3.1 [Single Page Application - SPA](#funcionalidades-spa)
> 3.2 [Server Side Rendering - SSR](#funcionalidades-ssr)
> 3.3 [Static Site Generation - SSG](#funcionalidades-ssg)
> 3.3.1 [Incremental Static Regeneration - ISR](#funcionalidades-ssg-isr)
> 4. [Outras alternativas](#alternativas)
> 4.1  [Gatsby](#gatsby)
> 4.2  [Nuxt.js... espera, isso é Vue.js? Sim!](#nuxt-js)
> 5. [Hora do código, vamos a prática!](#codigo-next-js)
> 5.1 [Formas de criar um projeto Next.JS](#create-app)
> 5.2 [Usando o create-next-app](#create-next-app)
> 5.2 [Limpando estrutura do projeto](#clean-app)
> 5.3 [Utilizando o File System Routing](#fsr)
> 5.4 [Implementando navegação SPA](#spa)
> 5.5 [Criando componentes](#componentization)
> 5.6 [Estilizando componentes](#stylish)
> 5.6.1 [Sim, você pode usar bibiliotecas que utilizava com o React! Usando styled-components com Next.JS](#styled-components)
> 5.6.2 [O que é o componente Head](#head-component)
> 5.6.3 [Adicionando fontes](#custom-fonts)
> 5.7 [Renderizando dados com CSR](#csr)
> 5.8 [Recurso de SSR](#ssr)
> 5.9 [A dádiva do SSG](#ssg)
> 6 [Extras](#extras)
> 6.1 [Integrações com a Vercel e a Netlify e o deploy](#integracao-e-deploy)
> 6.2 [Um pouco mais sobre Serverless](#serverless)
> 7. [Conclusão](#conclusao)
> 8. [Referências](#referências)

## O que é Next.JS?

O Next.JS é um framework popular de desenvolvimento front-end baseado em React e "pronto para produção", que visa acelerar o processo de construção de uma interface.

Atualmente ele é mantido pela Vercel e em seu core há como principal proposta elevar a produtividade de um desenvolvedor com setup de zero configuração para implementações de internacionalização, endpoint, suporte ao roteamento, Typescript, renderização ao lado do servidor, hybrid static e entre outras que podem melhorar a experiência de desenvolvimento como utilizar uma única tecnologia para desenvolver um web app completo.

### Por quê utilizá-lo?

- *Setup zero config* -> Quando iniciamos um projeto React.JS ou um projeto front-end qualquer, nós precisamos configurar um esquema de roteamento para navegação entre páginas, normalmente no contexto do React.JS utiliza-se [react-router-dom](inserir-link-roteamento-react4noobs), configurar o webpack, se for prefirível, configurar o Typescript e o Babel e entre outras muitas opções dependendo do web app que vcoê está produzindo. Mas, no Next.JS, como a parte da configuração é abstraída, o desenvolvedor pode focar inteiramente no desenvolvimento de novas funcionalidades.

- *Diversos modelos de renderização* -> Permite um fluxo de trabalho produtivo e de zero configuração para utilização de diversos modelos de renderização como o Cliente-side rendering, Server-side rendering, Static Site Generation e Incremental Static Regeneration, que serão explicados ao longo desse artigo.

- *File System Routing* -> A estrutura de pastas e arquivos da sua aplicação definirá as rotas dela.

- *API endpoints* -> Uma estrutura de desenvolvimento Serverless intuitiva.

- *Suporte ao Typescript* ->

## Frameworks são complexos em sua construção, mas em seu uso?

A dificuldade que você enfrentará nas tecnologias que for aprender será sempre relativa ao seu tempo de experiência em determinado ecossistema, a sua facilidade de aprender coisas novas e dentre outros fatores, mas normalmente, corre um equívoco sobre frameworks serem majoritariamente mais difíceis.

Isso não se demonstra necessariamente sempre uma verdade, pois no mundo da programação usamos muito a palavra **abstração**, que consiste em você isolar num conceito um elemento à exclusão dos demais. Na prática, isso significa omitir/encapsular alguns conceitos.

Nesse contexto, todas configurações complexas ou não, trabalhosas ou não que você teria que fazer sem a utilização de um framework, são omitidos com a utilização de um e você acaba não tendo que se preocupar com essas questões.

Normalmente, costuma ser em torno disso a proposta de frameworks opinados, visam automatizar rotinas juntamente de aglutinar boas críticas da experiência de outros desenvolvedores para que possamos entregar um produto de melhor qualidade com maior produtividade.

> ⚠️ **Ainda sim, recomendo que evite pular etapas!** Faça como quiser, mas se você quer dominar Next.JS e sequer conhece React.JS ou até mesmo Javascript, entenda que você vai ter inúmeras dificuldades de lidar de uma vez só, a dificuldade de aprender uma linguagem de programação, entender o funcionamento da biblioteca React.JS e compreender as possiblidades que o framework Next.JS te oferece. Isso pode desanimar e atrapalhar sua trilha. Embora algumas coisas levem tempo, é importante não dar um passo maior que a perna querendo economizar tempo pois assim vai acabar gastando mais ainda.

## Funcionalidades relacionadas a renderização

Muito do que popularizou o Next.JS foi a possibilidade de você adotar diferentes modelos de renderização numa mesma ferramenta com uma facilidade delicinha, tentarei fazer uma síntese desses modelos. Todos são funcionalidades que pretendo demonstrar na prática com Next.JS no decorrer desse texto, mas não se limite a esse artigo para entendê-los.

### Single Page Application e Client Side Rendering

Hoje, a maior parte das web apps que são desenvolvidas estão no formato Single Page Application (SPA, ou Aplicação de uma Única Página). Provalvemente, você já conhece e implementa esse formato em [React.JS](inserir-link-roteamento-react4noobs), mas afinal, o que é isso?

O mais relevante da SPA é o seu comportamento, do qual ao navegagar **não há recarregamento do site** que proporciona uma sensação de feedback instantâneo da página para o usuário.

O modelo de SPA surgiu como uma solução de melhoria da usabilidade e dinamismo de alguns nichos de formatos de aplicações, como dashboards. Pois, nesse modelo costuma ser feito o CSR (Client Side Rendering), isto é, quando o usuário acessa um domínio, ele recebe em seu navegador uma única página que tem seu Javascript baixado pelo navegador (provido por um CDN - Content Delivery Network, um servidor de arquivos estáticos), e **é gerada pela execução do navegador** a aplicação Javascript contida nessa página que controla todas as interações, de forma a carregar dinâmicamente os pedaços dos conteúdos que são acessados conforme o usuário interage com tal app sem recarregar a página.

Um dos principais tradeoffs desse modelo que utiliza CSR é uma depreciação no SEO (Search Engine Optimization, Otimização para Mecanismos de Busca), i.e. práticas que tem como objetivo alcançar bons rankings em mecanismos de buscas para obter maior tráfego. O SEO acaba sendo menos eficiente com CSR por causa que alguns robôs de indexação de conteúdo nos mecanismo de busca, como crawlers, não conseguem indexar tão bem por dificuldades relacionadas a baixar o Javascript.

<!-- -criar ilustração para demonstrar o fluxo do CSR -->

### Server Side Rendering

O formato Server Side Rendering (SSR - Renderização no lado do servidor), consiste num processo diferente do CSR, que ao invés de o Javascript e CSS de uma página serem carregados no client-side (navegador), são renderizados como arquivos estáticos do lado do servidor.

Nesse modelo, ao usuário acessar um domínio, é disparada uma requisição para um servidor e o dados da página **em tempo de execução** são gerados no lado do server-side, que envia o HTML completo e pronto com todos dados de navegação necessários para o client-side. E por fim, o navegador só tem o trabalho de baixar e exibir essa página.

No uso do Next.JS, com o uso do `getServerSideProps` (que demonstraremos na prática), é possível implementar facilmente essa renderização no lado do servidor. Assim, elevando SEO, performance e segurança da sua aplicação.

<!-- -criar ilustração para demonstrar o fluxo do SSR -->

### Static Site Generation

O modelo de Static Site Generation (SSG - Geração de Site Estático), apresenta um formato em que páginas estáticas são geradas no momento **em que a aplicação está sendo construída (build)**. Então, diferentemente do SSR, em que a todo momento, a cada page refresh, a página estática com os dados dinâmicos é gerada. Nesse modelo, essas informações serão geradas uma vez a cada build.

Nesse formato, ao usuário acessar um domínio, é disparada uma requisição para um servidor CDN, pois as páginas já foram geradas por um servidor **em tempo de build**, após isso o navegador recebe a página estática, baixa e constrói ela para o usuário visualizar as informações contidas nela.

Esse recurso também é de simples uso com `getStaticProps/getStaticPaths` no Next.JS. Com isso, é possível otimizar a renderização contínua de páginas que possuem informações que não mudam constantemente.

#### Incremental Static Regeneration

Esse modelo Incremental Static Regeneration (ISR - Regeneração Estática Incremental), possui a mesma ideia do SSG, com alguns benéficios adicionais, Como o re-rendering de páginas existentes em background, ou seja possibilita a geração de páginas estáticas **em tempo de execução**.

## Hora do código

Agora que entendemos um pouco sobre o que é o Next.JS, para que ele serve, quais são os principais modelos de renderização presentes Next.JS. Finalmente, vamos ver tudo isso na prática e vou cobrir cada conceito em seu momento adequado, começando com como fazer o Setup do projeto.

### Formas de criar um projeto Next.JS

- Utilizando create-next-app semelhante ao create-react-app

```
npx create-next-app nome-do-seu-app
# or
yarn create next-app nome-do-seu-app
```

Após isso, entre no diretório do seu App com `cd nome-do-seu-app`.

- Manual
  - 1º Instale os pacotes necessários:

  ```
  npm install next react react-dom
  # or
  yarn add next react react-dom
  ```  

  - 2º  Prepare os scripts necessários no arquivo `package.json`:

    ```json

  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }

  ```  
  - 3º Crie um arquivo dentro da pasta pages com uma função que retorne JSX.

------------------

### Criando um projeto e inicializando app

Com o intuito de explorar os modelos de renderização e outras funcionalidades do Next.JS eu arbitrariamente vou rodar: `yarn create next-app pokedex` e vou abrir o projeto no editor de código que eu uso.

Após o comando `yarn create next-app` ou `npx create-next-app` finalizarem a sua execução,teremos nossa pasta de projeto `pokedex` criada, entrarei nela via terminal com o comando `cd pokedex`.

Então, você verá que terá uma estrutura de pastas e arquivos semelhantes com a seguinte:

```
├───.git
│   │
│   └───(configurações do versionamento do projeto)
├───.next
│   │
│   └───(configurações do Next)
│
├───node_modules
│   │
│   └───(várias dependências)
│
├───pages
│   │   index.js
│   │   _app.js
│   │
│   └───api
│           hello.js
│
├───public
│       favicon.ico
│       vercel.svg
│
├───styles
│       globals.css
│       Home.module.css
│
├───.gitignore
│
├───package.json
│
├───README.md
│
└───yarn.lock


```

Salvo execeção de que se você utilizou o comando `npx create-next-app pokedex`, invés de um `yarn.lock`, você possuirá um `package-lock.json`, ambos para o registro/histórico dos pacotes.

Podemos perceber que de pastas temos uma chamda styles para guardarmos o CSS dos projetos temos um README.md com instruções de manuseio do projeto em inglês, também .gitignore com template pronto para ignorar arquivos e pastas que não serão interessantes versionar.

Ao observar o arquivo `package.json`, você possuirá algo semelhante a isso:

```json
{
  "name": "pokedex",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "10.1.3",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  }
}
```

Note que o `create next app`, que diferentemente de um `create react app` instalou a dependência next além do react e do react-dom e forneceu alguns scripts para trabalharmos com nosso app. Com isso, podemos rodar o comando o seguinte comando para inicializar nossa aplicação:

```
yarn dev
# or
npm run dev
```

Ao utilizar esse comando, se a porta 3000 do seu dispositivo estiver disponível, o app estará disponível em `http://localhost:3000` com a página de demonstração que o create next app criou em seu `./pages/index.js` com fast-refresh/hot-reload, que é o recarregamento da tela ao alterar arquivos do seu projeto Next.JS.

### Limpando estrutura de arquivos

Agora que temos nosso app rodando, vamos apagar tudo que não utilizaremos. Primeiramente, vou remover os seguintes **arquivos**:

```
├───public
│       favicon.ico
│       vercel.svg
│
├───styles
│       globals.css
│       Home.module.css
```

Ao remover esses arquivos, se o seu app estiver rodando, vão ocorrer erros de compilação por esses arquivos estarem sendo referenciados em alguns locais, então agora vamos remover a referência a esses arquivos.

Entrando em `./pages/index.js`, encontraremos um arquivo que exporta uma função chamada "Home" que retorna JSX, então no topo do arquivo removerei a seguinte importação:

```
import styles from '../styles/Home.module.css'
```

Também removerei todo o conteúdo do retorno dessa função Home para um Fragmento contendo o componente Head com o title do app tendo como "irmão" uma tag main e uma tag footer referenciando o criador do projeto, ficando o seguinte o resultado no arquivo `./pages/index.js`:

```jsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PokéHome</title>
      </Head>
      <main>
      </main>
      <footer>
        Projeto desenvolvido por seu-nome
      </footer>
    </>
  )
}
```

Vai notar que o projeto ainda vai falhar na compilação do código, pois precisamos remover mais uma referência que ainda não removemos. Então entraremos em `./pages/_app.js` e removeremos a importação do arquivo que não existe mais, ficando com o seguinte resultado nesse `_app.js`:

```
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

vai notar que seu projeto voltou a compilar, e agora é exibido na tela "Projeto desenvolvido por seu-nome".

Agora que temos a estrutura do projeto mais limpa, facilita a visualização do que temos em cada pasta e arquivo.

---------

### Entendendo o básico e utilizando o File-System Router

Lembro que da primeira vez que ouvi "file-system router", eu imaginei que teria que fazer algum mapeamento das pastas e arquivos para algum tipo de função consumir esse mapeamento e gerar as rotas. Mas, na verdade, é muito mais simples que isso.

No Next.JS, esse File-system router já vem configurado e basta você utilizá-lo. E para usá-lo, basta criar um arquivo que retorna JSX dentro da pasta `./pages`.

Você também pode criar uma pasta com um arquivo index.js e isso se tornará uma rota também. Irei adicionar dentro da pasta pages, uma pasta chamada pokemon,s e dentro dessa pasta pokemons, um arquivo index.js (`./pages/pokemon/index.js`) com o seguinte JSX:

```jsx
import Head from 'next/head'

export default function Pokemons() {
  return (
    <>
      <Head>
        <title>Pokémons</title>
      </Head>
      <main>
        <section>
          <h1>Lista de pokémons</h1>

        </section>
      </main>
      <footer>
        Projeto desenvolvido por seu-nome
      </footer>
    </>
  )
}
```

Com essa página pronta, basta acessar no seu navegador o endereço `http://localhost:3000/pokemons`, assumindo que a sua porta 3000 não esteja sendo usada, se estiver, o Next.JS usará outra porta que encontrar livre e informará ela via terminal, que vai encontrar o seguinte conteúdo:

```
Lista de pokémons

Projeto desenvolvido por seu-nome
```

Por questões de organização da estrutura desse mini projeto, vou parar a execução do projeto e criar na raíz do projeto uma pasta chamada `src` e mover a pasta `pages`, `public` e `styles` para dentro da src.

Agora, basta utilizar do comando `yarn dev` ou `npm run dev` para executar novamente a aplicação e o Next.JS encontrará automaticamente a pasta "pages" e construirá as páginas da sua aplicação.

-----

### Navegando entre páginas

Primeiro, podemos notar que, atualmente, está um pouco trabalhoso navegar, quando queremos acessar a página raíz da aplicação, temos que digitar no navegador `http://localhost:3000/` e quando queremos acessar a página de pokémons, temos que digitar `http://localhost:3000/pokemons`.

Agora, vamos mudar isso adicionando botões de navegação nessas duas páginas. Iniciando pela página que está em `./src/pages/index.js`, vamos importar o componente `NextLink`de dentro de `next/link` e passar a propridade **href** como sendo da rota que queremos acessar ('/pokemons') e criaremos um botão dentro desse componente com o texto "Ver pokémons". Ficando com o seguinte código:

```jsx
import Head from 'next/head'
import NextLink from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>PokéHome</title>
      </Head>
      <main>
        <NextLink href="/pokemons">
            <button>Ver pokémons</button>
        </NextLink>
      </main>
      <footer>
        Projeto desenvolvido por seu-nome
      </footer>
    </>
  )
}

```

Ao salvar o arquivo e acessar `http://localhost:3000/`, poderá  clicar no botão para ir à página de pokémons, recomendo que esteja atento ao ícone da página. Pois, assim notará que a página não recarregou, então parabéns! Você acaba de implementar uma navegação entre páginas com o comportamento de SPA :D

Se não notou a diferença, tu pode acessar a página de pokémons pelo digitando o endereço dela em seu navegador (`http://localhost:3000/pokemons`) e após isso retornar à página raíz e utilizar do botão.

Para complementar essa navegação apenas de ida, podemos fazer a volta dela. Então, basta abrirmos o arquivo `./src/pages/pokemons/index.js` e importaremos o componente NextLink novamente, entretanto mudando a propriedade **href** para a rota raíz da aplicação, sendo `href="/"`, e adicionando um botão dentro do componente NextLink com o texto "Ir para a Pokéhome". Assim, ficando com o seguinte código:

```jsx
import Head from 'next/head'
import NextLink from 'next/link';

export default function Pokemons() {
  return (
    <>
      <Head>
        <title>Pokémons</title>
      </Head>
      <main>
        <header>
          <NextLink href="/">
            <button>Ir para a Pokéhome</button>
          </NextLink>
        </header>
        <section>
          <h1>Lista de pokémons</h1>
        </section>
      </main>
      <footer>
        Projeto desenvolvido por seu-nome
      </footer>
    </>
  )
}
```

Agora, temos uma navegação com comportamento de SPA entre essas duas páginas!

-------------------

### Vamos criar um componente

Não podemos esquecer a essência de frameworks frontend, além de terem a motivação da navegação SPA muito forte, a ideia de componentização da interface também é um dos pilares.

Temos 1 excelente candidato para componentização, que é o footer, então vamos colocar a mão na massa!

Primeiro vou criar um arquivo para o componente de Footer e uma pasta, então em `./src/components/Footer.js` colocarei o seguinte conteúdo:

```javascript
export default function Footer() {
  return (
    <footer>
      Projeto desenvolvido por seu-nome
    </footer>
  )
}
```

E agora podemos importar o Footer e usar o mesmo compoennte tanto no nosso index quanto na página de pokemons. Ficando da seguinte forma index (`./src/pages/index.js`):

```javascript

import Head from 'next/head'
import NextLink from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>PokéHome</title>
      </Head>
      <main>
        <NextLink href="/pokemons">
          <button>Ver pokémons</button>
        </NextLink>
      </main>
      <Footer />
    </>
  )
}
```

Já página de pokémons ficará assim com a substituição do footer pelo componente de Footer:

```javascript
import Head from 'next/head'
import NextLink from 'next/link';
import Footer from '../../components/Footer';

export default function Pokemons() {
  return (
    <>
      <Head>
        <title>Pokémons</title>
      </Head>
      <main>
        <header>
          <NextLink href="/">
            <button>Ir para a Pokéhome</button>
          </NextLink>
        </header>
        <section>
          <h1>Lista de pokémons</h1>
        </section>
      </main>
      <Footer />
    </>
  )
}

```

## Referências

- [Documentação oficial do Next.JS](https://nextjs.org/docs/getting-started)
- [Documentação oficial do Next.JS traduzida para português pelo integrante Caio da he4rt](https://github.com/caioreix/NextJs4noobs)
<!-- Abrir o histórico e adicionar todas referencias -->