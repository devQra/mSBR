import { combineReducers } from "redux";

import mainReducer from "./mainReducer";
import foodReducer from "./foodReducer";
import youtubeReducer from "./youtubeReducer";
import infoReducer from "./infoReducer";
import boardReducer from "./boardReducer";

export default combineReducers({
  mains: mainReducer,
  foods: foodReducer,
  youtubes: youtubeReducer,
  infos: infoReducer,
  boards: boardReducer,
});
