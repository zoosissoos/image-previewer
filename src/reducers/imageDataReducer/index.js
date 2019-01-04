import { IMAGE_FETCH_REQUESTED, IMAGE_FETCH_SUCCESS, IMAGE_FETCH_FAILURE } from '../../actions/constants';

const initialState = {
  isLoading: false,
  err: null,
  data: null
};

export default function(state = initialState , action) {
  switch (action.type) {
    case IMAGE_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      }
    case IMAGE_FETCH_SUCCESS:
      return {
        ...state,
        err: null,
        isLoading: false,
        data: action.data
      }
    case IMAGE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.err
      }
    default:
      return state;
  }
}