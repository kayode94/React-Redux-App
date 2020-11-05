import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import{Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

/////Reducer import///////
import {pokeReducer} from './Store/Reducers/PokeReducer'
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {pokeURL} from './PokeURL/PokemonURL'

const store = createStore(pokeReducer, applyMiddleware(thunk, logger))

axios.get(pokeURL)
.then(response=>{
  console.log(response.data.results)
})
.catch(error=>{
  console.log(error)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
