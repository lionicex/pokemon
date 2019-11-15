import { SHOW_DETAILS, GET_TYPES, GET_ABILITIES, GET_NAME, GET_ID, GET_HEIGHT } from "./types";
import axios from 'axios';

export const showDetails = (pathname) => async dispatch => {
  const result = pathname.split('\/');
  const response = await axios.get(`https://pokeapi.co/api/v2${pathname}`);

  dispatch({
    type: GET_NAME,
    payload: result[result.length - 1]
  });

  dispatch({
    type: SHOW_DETAILS,
    payload: response.data
  });
  dispatch({
    type: GET_ID,
    payload: response.data.id
  });
  dispatch({
    type: GET_HEIGHT,
    payload: response.data.height
  });

};

export const type = (types) => dispatch => {

  if (types) {
    const result = types.map(element => {
      return element.type.name;
    }).join(', ');

    dispatch({
      type: GET_TYPES,
      payload: result
    })

  }

}

export const ability = (ability) => dispatch => {

  if (ability) {
    const result = ability.map(element => {
      return element.ability.name;
    }).join(', ');

    dispatch({
      type: GET_ABILITIES,
      payload: result
    })

  }

}