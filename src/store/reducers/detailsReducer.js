import { SHOW_DETAILS, GET_TYPES, GET_ABILITIES, GET_NAME, GET_ID, GET_HEIGHT} from "../actions/types";

const initialState = {
  information: [],
  types: 'null',
  abilities: 'null',
  name: 'null',
  id: 0,
  height: 0
}

export default function (state = initialState, action) {

  switch (action.type) {

    case SHOW_DETAILS:
      return {
        ...state,
        information: action.payload
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload
      };
    case GET_ABILITIES:
      return {
        ...state,
        abilities: action.payload
      };
      case GET_NAME:
      return {
        ...state,
        name: action.payload
      };
      case GET_HEIGHT:
      return {
        ...state,
        height: action.payload
      };
      case GET_ID:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }

}

