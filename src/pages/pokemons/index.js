import Head from 'next/head';
import NextLink from 'next/link';
import Footer from '../../components/Footer';

export default function Pokemons({ pokemons }) {

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
          <ul>
            {pokemons && pokemons.map(pokemon => (
              <li key={pokemon.name}>
                <p>Poke: {pokemon.name}</p>
                <NextLink
                  href="/pokemons/[name]"
                  as={`/pokemons/${pokemon.name}`}
                >
                  Ver detalhes
                </NextLink>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();

  return {
    props: {
      pokemons: data.results
    },
    revalidate: 15
  }
}