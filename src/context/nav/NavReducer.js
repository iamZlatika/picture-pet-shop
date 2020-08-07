import {
  SHOW_MOBILE_NAV,
  HIDE_MOBILE_NAV
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case SHOW_MOBILE_NAV:
      return {
        ...state,
        toggle: true
      }
    case HIDE_MOBILE_NAV:
      return {
        ...state,
        toggle: false
      }

    default:
      return state
  }
}