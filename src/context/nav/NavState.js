import React, { useReducer } from 'react';
import NavContext from './NavContext';
import NavReducer from './NavReducer';
import {


  SHOW_MOBILE_NAV,
  HIDE_MOBILE_NAV
} from '../types'

const NavState = props => {
  const initialState = {
    toggle: false
  };

  const [state, dispatch] = useReducer(NavReducer, initialState)


  const hideMobileNav = (e) => {
    if (e.target.classList.contains('close'))
      dispatch({ type: HIDE_MOBILE_NAV })
  }

  const showBackdrop = () => {

    dispatch({ type: SHOW_MOBILE_NAV })
  }


  return (
    <NavContext.Provider
      value={{
        toggle: state.toggle,
        hideMobileNav: hideMobileNav,
        showBackdrop: showBackdrop
      }}>
      {props.children}
    </NavContext.Provider>
  )
}

export default NavState
