import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from "./useAxios";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const POKE_URL = "https://pokeapi.co/api/v2/pokemon/";
  // const [pokemon, setPokemon] = useState([]);
  // const addPokemon = async name => {
  //   const response = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/${name}/`
  //   );
  //   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
  // };
  const [pokemonCards, addPokemonCards] = useAxios([], "pokemon", POKE_URL);
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemonCards} />
      </div>
      <div className="PokeDex-card-area">
        {pokemonCards.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
