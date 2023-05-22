const IMGURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ name, id, type, base_experience }) {
  return (
    <div>
      <p>{name}</p>
      <img src={`${IMGURL}${id}.png`} alt="pokemon"></img>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
