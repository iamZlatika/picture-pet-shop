import {
  ADD_ITEM,
  SHOW_FULLIMG,
  DELETE_ITEM,
  SET_LOADING,
  GET_IMGS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_IMGS:
      return {
        ...state,
        loading: false,
        imgs: action.payload
      }
    default:
      return state
  }
}