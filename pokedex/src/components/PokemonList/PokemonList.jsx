import { useState } from "react";
import { useEffect } from "react"
import axios from 'axios';
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";


function PokemonList() {
    // if you pass dependecy array then component wil not render again n again, so do it !
    
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'
    async function downloadPokemons(){
        const response = await axios.get(POKEDEX_URL);  //* download list of 20 Pokemons
        
        const pokemonResults = response.data.results; // array of objects {name and url(for each pokemon)}  //* details for each pokemon in its own url so we need that url to extract their info's
        console.log("Initial Response \n" , response.data); 

        // iterating over the array of pokemon and using their url to create an array of promise that will download that 20 pokemons
        const pokemonResultPromise = pokemonResults.map( (pokemon) => axios.get(pokemon.url) );  // pokemonResultPromise will store the result of url of pokemon object 
        
        console.log("pokemonResultPromise", pokemonResultPromise);


        // passing tthat promise to axios.all and it will await
        const pokemonData = await axios.all(pokemonResultPromise);    // array of 20 pokemon detail data
        console.log("pokemonData", pokemonData);

        // const result = {
        //     name: pokemonData[0].data.name,
        //     image: pokemonData[0].data.sprites.back_default  //! this will give you the link of image from github 
        // }


      //iterate on data of each pokemon and extract id, name, images, type
      const PokeListResult = pokemonData.map( (pokeData) => {
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny ,
                types: pokemon.types
            }

        });
       
        console.log("result", PokeListResult);

        
        setPokemonList(PokeListResult);
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