
export async function fetchPokemon(pokeName) {
   try {
    const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    return res?.data
   } 
   catch (err) {
    console.log(err)
   }
}

export async function postPokemon() {
    try {
     const res = axios.post(`https://pokeapi.co/api/v2/pokemon/${pokeName}`,
     {
       name: "example"
     });
     return res?.data
    } 
    catch (err) {
     console.log(err)
    }
 }