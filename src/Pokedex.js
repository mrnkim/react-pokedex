import Pokecard from "./Pokecard";

/** Receives array "pokemons" as a property. Maps through "pokemons", extracts
 * the name, id, type, and base_experience from each element, and returns
 * a Pokecard component for each pokemon based on the extracted values.
 */

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
