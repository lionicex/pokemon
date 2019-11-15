import { SHOW_POKEMONS, GET_NEXT, GET_PREV, GET_LAST_URL } from "../actions/types";

const initialState = {
  pokemons: [],
  next: null,
  prev: null,
  url: 'https://pokeapi.co/api/v2/pokemon'
}

export default function (state = initialState, action) {

  switch (action.type) {

    case SHOW_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };

    case GET_NEXT:
      return {
        ...state,
        next: action.payload
      };

    case GET_PREV:
      return {
        ...state,
        prev: action.payload
      };

    case GET_LAST_URL:
      return {
        ...state,
        url: action.payload
      };

    default:
      return state;
  }

}

