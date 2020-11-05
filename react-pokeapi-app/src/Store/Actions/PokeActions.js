import axios from 'axios'
import {pokeURL} from '../../PokeURL/PokemonURL'

//action types

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'

//async action creators

export const fetchPokemon = () =>{
    return (dispatch) => {
        dispatch({type: FETCH_POKEMON_START})
        //FETCHING POKE DATA
        axios.get(pokeURL)
        .then(response=>{
            // console.log(response.data.results)
            dispatch({type:FETCH_POKEMON_SUCCESS, payload: response.data.results})
        })
        .catch(error=>{
            dispatch({type:FETCH_POKEMON_FAILURE, payload: error.message})
        })
    }
}



