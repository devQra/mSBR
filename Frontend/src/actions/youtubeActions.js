import { FETCH_YOUTUBE_FIND } from "./types";

export const fetchYouTubeFind = (fd) => async (dispatch) => {
  const key = import.meta.env.VITE_YT_API_KEY;
  const api = import.meta.env.VITE_YT_API_LINK;
  try {
    let url = api + key + "&q=" + fd;
    console.log(url);
    const response = await fetch(url);
    const result = await response.json();
    const action = {
      type: FETCH_YOUTUBE_FIND,
      payload: result.items,
    };
    console.log(result.items);
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
