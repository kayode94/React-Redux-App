import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchPokemon} from '../Store/Actions/PokeActions'

const PokemonList = (props) =>{
    useEffect(() =>{
        props.fetchPokemon()
    },[])


    return(
        <div>
            <h2>Gotta Catch'em All!</h2>
            {props.isLoading ? <p>Loading your Pokemon...</p> : null}
            {props.error? <p style={{color: 'red'}}> {props.error}</p> : null}
            {props.pokeData.map((pokemon)=>(
                <div>
                    <h4>{pokemon.name}</h4>
                </div>
            ))}
        </div>
    )
}







const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        pokeData: state.pokeData,
        error: state.error
    }
}


export default connect (mapStateToProps, {fetchPokemon})(PokemonList)