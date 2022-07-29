/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Pokelist.css";
import PokemonCard from "../pokemonCard/PokemonCard";

const Pokelist = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=700&offset=0"
    );
    const data = await res.json();

    function createPokemonObjects(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObjects(data.results);
    console.log(allPokemons);
  };
  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.name}
              id={pokemonStats.id.toString().padStart(3, "0")}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokelist;
