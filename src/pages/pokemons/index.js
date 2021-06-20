import { useState, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import Footer from '../../components/Footer';

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  const handleLoadPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    console.log(data.results);
    setPokemons(data.results);
  };

  useEffect(() => {
    handleLoadPokemons();
  }, []);

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
            {pokemons && pokemons.map(pokemon => <li key={pokemon.name}><p>Poke: {pokemon.name}</p></li>)}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}