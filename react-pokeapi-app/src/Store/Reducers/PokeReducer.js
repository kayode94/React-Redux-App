
import {
FETCH_POKEMON_START,  
FETCH_POKEMON_SUCCESS, 
FETCH_POKEMON_FAILURE 
} from '../Actions/PokeActions'

const initialPokeState = {
    isLoading: false,
    pokeData: [],
    error: ''
}

export const pokeReducer = (state = initialPokeState, action) => {
    switch(action.type){
        case FETCH_POKEMON_START:
            return{
                ...state, 
                isLoading: true, 
                error: ''
            }

        case FETCH_POKEMON_SUCCESS:
            return{
                ...state, 
                isLoading: false, 
                pokeData: action.payload}

        case FETCH_POKEMON_FAILURE:
            return{
                ...state, 
                isLoading: false, 
                error: action.payload}        
        default:
            return state
    }
}