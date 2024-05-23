import axios from 'axios';
export async function fetchPokemon(pokeName) {
   try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    console.log(res.data.results)
    return res?.data
   } 
   catch (err) {
    console.log(err)
   }
}

export async function fetchAllPokemons() {
   try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
   //  console.log(res.data)
    return res?.data
   } 
   catch (err) {
    console.log(err)
   }
}