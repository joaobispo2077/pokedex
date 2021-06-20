import Head from "next/head";
import NextLink from 'next/link';

export default function Pokemon({ pokemon }) {

  return (
    <div>
      {pokemon && (
        <>
          <Head>
            <title>{pokemon.name.toUpperCase()}</title>
          </Head>
          <NextLink href="/pokemons">
            <button>Ir para a lista de Pokemon</button>
          </NextLink>
          <h1>Nome: {pokemon.name}</h1>
          <p>Ordem: {pokemon.order}</p>
          <p>Experiência base: {pokemon.base_experience}</p>
          <h4>Formas</h4>
          <ul>
            {pokemon.forms.length && pokemon
              .forms.map(form => <li key={form.name}>{form.name}</li>)}
          </ul>
        </>
      )}
    </div>
  )
}

export async function getStaticProps(context) {
  const { name } = context.params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await response.json();

  return {
    props: {
      pokemon
    },
  }
}

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { name: 'charmander' } },
      { params: { name: 'bulbasaur' } },
      { params: { name: 'squirtle' } },
    ],
    fallback: true
  }
}