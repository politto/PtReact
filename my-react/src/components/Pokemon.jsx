import { useState } from "react";
import { useEffect } from "react";

export default function Pokemon() {
    
    const [pokeName, setPokeName] = useState("pikachu")
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => response.json())
        .then((data) => {
            return setPokemon({
                name: data.name,
                height: data.height,
                weight: data.weight,
                image: data.sprites.front_default,
            })
         })
        // .then(err => console.log("error: " + err))
        return () => {
            
        };
    }, []);

    return (
        <div>
            {console.log(pokemon)}
            {pokemon? pokemon.name : "<p>not found</p>"}
        </div>
    )
}