import { useState } from "react";
import { useEffect } from "react"
import axios from 'axios';
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";


function PokemonList() {
    // if you pass dependecy array then component wil not render again n again, so do it !
    
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    async function downloadPokemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log("Initial Response \n" , response.data);
        
        const pokemonResults = response.data.results; // array of name and url(for each pokemon)
        const pokemonResultPromise = pokemonResults.map( (pokemon) => axios.get(pokemon.url) );  // pokemonResultPromise will store the result of url of pokemon object 
        console.log("pokemonResultPromise", pokemonResultPromise);

        const pokemonData = await axios.all(pokemonResultPromise);  
        console.log("pokemonData", pokemonData);

        // const result = {
        //     name: pokemonData[0].data.name,
        //     image: pokemonData[0].data.sprites.back_default  //! this will give you the link of image from github 
        // }
      const result = pokemonData.map( (pokeData) => {
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny ,
                types: pokemon.types
            }

        });
       
        console.log("result", result);
        setPokemonList(result);
        setIsLoading(false)
    }

    useEffect(() => { 
      downloadPokemons();
    }, [])

   

  return (
    <>
        <div className="pokemon-list-container">
           <h2 id="pokemon-list-heading">Pokemon List</h2>
           <br/>
           <div className="pokemon-list">
            { (isLoading) ? 'Loading...' : 
                  pokemonList.map( (pokemon) => <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.id} />)
                  // <Pokemon name={pokemonList.name} image={pokemonList.image} />
            }
           </div>
           
        </div>
    </>
  )
}

export default PokemonList