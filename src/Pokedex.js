import Pokecard from "./Pokecard";

function Pokedex({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div>
          <Pokecard
            name={pokemon.name}
            id={pokemon.id}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        </div>
      ))}
    </div>
  );
}

export default Pokedex;
