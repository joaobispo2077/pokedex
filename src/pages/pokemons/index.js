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