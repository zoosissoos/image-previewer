import {CHANGE_PAGE, CHANGE_LIMIT, UPDATE_FAVORITES} from '../../actions/constants';

const initialState = {
  page: 1,
  limit: 20,
  favorites: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case CHANGE_LIMIT:
      return {
        ...state,
        limit: action.limit
      };
    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites
      }
    default:
      return state;
  }
}