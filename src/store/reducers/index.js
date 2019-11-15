import { combineReducers } from "redux";
import pokemonReducer from './pokemonReducer';
import detailsReducer from "./detailsReducer";

export default combineReducers({

  pokemons: pokemonReducer,
  information: detailsReducer

});

