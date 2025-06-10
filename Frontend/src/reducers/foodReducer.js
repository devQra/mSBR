import {
  FETCH_FOOD_LIST,
  FETCH_FOOD_DETAIL,
  FETCH_FOOD_FIND,
} from "../actions/types";

const foodState = {
  food_list: {},
  find_list: [],
  food_detail: {},
};

export default function (state = foodState, action) {
  switch (action.type) {
    case FETCH_FOOD_LIST:
      return {
        ...state,
        food_list: action.payload,
      };
    case FETCH_FOOD_DETAIL:
      return {
        ...state,
        food_detail: action.payload,
      };
    case FETCH_FOOD_FIND:
      return {
        ...state,
        find_list: action.payload,
      };
    default:
      return state;
  }
}
