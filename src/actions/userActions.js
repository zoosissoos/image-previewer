import { CHANGE_LIMIT, CHANGE_PAGE, UPDATE_FAVORITES} from './constants';


export const changePage = (page) => {
  return {
    type:  CHANGE_PAGE,
    page
  }
};

export const changeLimit = (limit) => {
  return {
    type:  CHANGE_LIMIT,
    limit
  }
};

export const changeFavorites = (favorites) => {
  return {
    type:  UPDATE_FAVORITES,
    favorites
  }
};