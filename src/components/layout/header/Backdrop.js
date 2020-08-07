import React, { useContext } from 'react';
import '../../../App.css';
import NavContext from '../../../context/nav/NavContext'



const Backdrop = props => {
  const navContext = useContext(NavContext);

  const { hideMobileNav, toggle } = navContext;

  
  return <div
    className={(toggle ? 'backdrop close' : 'default-backdrop')}
    onClick={hideMobileNav}
  >
  </div>
}
export default Backdrop;