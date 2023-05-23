const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Takes name, id, type, and base_experience as properties.
 * Returns div containing name, img, type, and EXP for a pokemon.
 */

function Pokecard({ name, id, type, base_experience }) {
  return (
    <div>
      <p>{name}</p>
      <img src={`${IMG_URL}${id}.png`} alt={name}></img>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
