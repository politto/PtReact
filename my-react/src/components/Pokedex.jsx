import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchPokemon } from "../api/fetchPokemon"

export function Pokedex() {
    const { pokeName } = useParams();
    const [ pokedex, setPokeDex]    = useState(undefined);

    useEffect(() => {
        // fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        // .then((response) => response.json())
        // .then((data) => {
        //     return setPokemon({
        //         name: data?.name,
        //         height: data?.height,
        //         weight: data?.weight,
        //         image: data?.sprites.front_default,
        //     })
        //  })
        // .catch(err => set)


        return () => {
            
        };
    }, []);

    const fetchData = async () => {
        let pokemonData = await fetchPokemon(pokeName)
        return setPokeDex({
                    name: pokemonData?.name,
                    height: pokemonData?.height,
                    weight: pokemonData?.weight,
                    image: pokemonData?.sprites.front_default,
                })
    }
    return (
        <div>
            {Pokedex != undefined ? (
                <>
                    <b>name: {pokedex?.name}</b>&nbsp;<b>height: {pokedex?.height}</b>
                </>
            ): (
                <b>Pokemon not found</b>
            )}
        </div>
    )
}