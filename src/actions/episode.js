import axios from "axios";

export const FETCH_EPISODE_START = "FETCH_EPISODE_START";
export const FETCH_EPISODE_SUCCESS = "FETCH_EPISODE_SUCCESS";
export const FETCH_EPISODE_ERROR = "FETCH_EPISODE_ERROR";

export function fetchEpisode(obj) {
  return dispatch => {
    dispatch({ type: FETCH_EPISODE_START });

    axios
      .get(
        `https://api.themoviedb.org/3/tv/1695/season/${obj.season}/episode/${obj.episode}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then(res => {
        dispatch({ type: FETCH_EPISODE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_EPISODE_ERROR, payload: err.response });
      });
  };
}
