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
