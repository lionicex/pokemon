import { SHOW_POKEMONS, GET_NEXT, GET_PREV, GET_LAST_URL } from "./types";
import axios from 'axios';

export const showPokemons = (url) => async dispatch => {

  const response = await axios.get(`${url}`);

  dispatch({
    type: GET_LAST_URL,
    payload: url
  })

  dispatch({
    type: SHOW_POKEMONS,
    payload: response.data.results
  })

  dispatch({
    type: GET_NEXT,
    payload: response.data.next
  })

  dispatch({
    type: GET_PREV,
    payload: response.data.previous
  })

}

