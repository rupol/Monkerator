import {
  FETCH_EPISODE_START,
  FETCH_EPISODE_SUCCESS,
  FETCH_EPISODE_ERROR
} from "../actions/episode";

const initialState = {
  episode: {},
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EPISODE_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_EPISODE_SUCCESS:
      return {
        ...state,
        episode: action.payload,
        isLoading: false
      };
    case FETCH_EPISODE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
