import { fetchAllPokemons, fetchPokemon } from "../api/fetchPokemon";
import { useState, useEffect, createContext, useContext } from "react";

const PokemonContext = createContext()

export default function GameWindow() {
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(2)
    const [randPokemon, setRandPokemon] = useState(parseInt(Math.random() *20))

    // console.log(pokemonNames);

    useEffect(() => {
        
        const loadPokemonList = async () => {
            let pokemonsData = []
            for (let i = 0; i < 20; i++) {
                const fetchedData = await fetchPokemon(i + 1)
                pokemonsData.push(fetchedData)
                
            }
            setTimeout(() => {
                setPokemons(pokemonsData)
            }, 0);
        }
        if (pokemons.length == 0) loadPokemonList()
        

        return () => {
        };
    }, []);
    
    console.log(pokemons);

    return (
        <div id = "gamePanel" className = "flex flex-col items-center align-center">
            {pokemons.length > 0 ? (
            <>
                <h1>Welcome to Pokemon battle</h1>
                <PokemonContext.Provider value={{ pokemons, setPokemons, selectedPokemon, setSelectedPokemon, randPokemon, setRandPokemon }}>
                    <PokemonSelector></PokemonSelector>
                    <div className="gameWindow m-auto w-[80vw] h-[44vw] min-w-[800px] min-h-[540px] p-[2vw] pb-[0]">
                        <OpposeInfo></OpposeInfo>
                        <Info></Info>
                        <div id="Char" className="overflow-hidden">
                            <img
                                src={pokemons[selectedPokemon].sprites.back_default}
                                alt=""
                                srcset=""
                                className="custImg"
                            />
                        </div>
                        <div id="opposeChar">
                            <img
                                src={pokemons[randPokemon].sprites.front_default}
                                alt=""
                                srcset=""
                                className="custImg2"
                            />
                        </div>
                    </div>
                    <div className="">
                        <GameText></GameText>
                    </div>
                </PokemonContext.Provider>
            </>
        ) : (
            <p>loading...</p>
        )}
            
        </div>
    )
}


const Info = (props) => {
    const pokeContext = useContext(PokemonContext);
    const selectedPoke = pokeContext.selectedPokemon
    const pokemons = pokeContext.pokemons

    console.log(pokemons);
    
    console.log(pokemons[selectedPoke].name);
    return (
        <div id="info" className="pt-[20%] pl-[15%]">
            <div className="text-start flex flex-row content-center h-[32%] items-baseline">
                <div className="text-[45px] w-[60%]">{
                pokemons[selectedPoke].name
                }</div>
                <div className = "text-[30px] font-bold">Lv.{
                pokemons[selectedPoke].base_experience
                }</div>
            </div>
            <div className="content-end">
                <div className="h-[5%] text-[30px] items-end">{
                pokemons[selectedPoke].stats[0].base_stat
                }/{
                pokemons[selectedPoke].stats[0].base_stat
                }</div>
            </div>
    
            
        </div>
    )
}

const OpposeInfo = (props) => {
    const pokeContext = useContext(PokemonContext);
    const selectedPoke = pokeContext.randPokemon
    const pokemons = pokeContext.pokemons

    console.log(pokemons);
    
    console.log(pokemons[selectedPoke].name);
    return (
        <div id="opposeInfo" className="pt-[20%] pl-[15%]">
            <div className="text-start flex flex-row content-center h-[32%] items-baseline">
                <div className="text-[45px] w-[60%]">{
                pokemons[selectedPoke].name
                }</div>
                <div className = "text-[30px] font-bold">Lv.{
                pokemons[selectedPoke].base_experience
                }</div>
            </div>
            <div className="content-end">
                <div className="h-[5%] text-[30px] items-end">{
                pokemons[selectedPoke].stats[0].base_stat
                }/{
                pokemons[selectedPoke].stats[0].base_stat
                }</div>
            </div>
    
            
        </div>
    )
}

const GameText = (props) => {
    return (
        <div className = "rounded-sm bg-blue">

        </div>
    )
}

const PokemonSelector = (props) => {
    const pokemons = useContext(PokemonContext);
    return (
        <div className = "h-[22vh] w-[100%] bg-white m-[1vw]">
            
            <h2 className = "text-2xl"> {"<<<"} Select your Pokemon! {">>>"}</h2>
            <div className ="flex flex-row gap-[2vw] center items-center overflow-scroll scrollbar-hide p-[1vw]">
            { 
                // for(let i = 0; i < pokemon.length; i++) {
                // 
                // } for cannot use directly

                pokemons.pokemons.map((pokemon, index) => {

                    console.log(pokemon);
                    return (
                        
                        <PokemonCard key = {index} src = {pokemon.sprites.front_default} alt={pokemon.name} name = {pokemon.name}
                        index = {index}
                        className = ""
                        ></PokemonCard>
                        )

                })
            }
            </div>
        </div>
    )
}

const PokemonCard = (props) => {
    const pokemons = useContext(PokemonContext);
    return (
        <div className="w-[15vw] cursor-pointer" 
        onClick = {() => pokemons.setSelectedPokemon(props.index)
        }>
            <img src = {props.src}/>
            <p>{props.name}</p>
        </div>
    )
}

