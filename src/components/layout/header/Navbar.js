import React, { Fragment, useContext } from 'react';
import './header.css';
import Backdrop from './Backdrop';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { motion } from 'framer-motion';


import NavContext from '../../../context/nav/NavContext'



const Navbar = () => {
  const navContext = useContext(NavContext)
  const { toggle, hideMobileNav } = navContext;



  return (
    <Fragment>
      <Backdrop />

      <motion.ul className={(toggle ? 'navbar-mobile' : 'navbar')}
        onClick={hideMobileNav}


      >
        <li className="nav-link">
          <Link to='/'
          className="close"
          >Home</Link>
        </li>
        <li className="nav-link"    >
          <Link to='/cats'
          className="close">Cats</Link>
        </li>
        <li className="nav-link">
          <Link to='/dogs'
          className="close"
          >Dogs</Link>
        </li>
        <li className="nav-link">
          <Link to='/about'
          className="close"
          >About</Link>
        </li>
        <li className="nav-link"
        >
          <Cart />
        </li>
      </motion.ul>

    </Fragment>
  )
}

export default Navbar
