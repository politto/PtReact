import axios from 'axios';
export async function fetchPokemon(pokeName) {
   try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    return res?.data
   } 
   catch (err) {
    console.log(err)
   }
}

export async function fetchAllPokemons() {
   try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    return res?.data
   } 
   catch (err) {
    console.log(err)
   }
}