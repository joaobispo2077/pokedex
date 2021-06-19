import Head from 'next/head';
import NextLink from 'next/link';
import Footer from '../../components/Footer';

export default function Pokemons() {
  return (
    <>

      <title>Pokémons</title>

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