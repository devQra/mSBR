import {
  FETCH_INFO_DETAIL,
  FETCH_INFO_FIND,
  FETCH_INFO_LIST,
} from "../actions/types";

const infoState = {
  info_data: {},
  info_detail: {},
  info_find: [],
};
export default function (state = infoState, action) {
  console.log("reducer call" + action.payload);
  switch (action.type) {
    case FETCH_INFO_LIST:
      return {
        ...state,
        info_data: action.payload,
      };
    case FETCH_INFO_DETAIL:
      return {
        ...state,
        info_detail: action.payload,
      };
    case FETCH_INFO_FIND:
      return {
        ...state,
        info_find: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
