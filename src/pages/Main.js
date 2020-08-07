import React, { Fragment } from 'react';
import './pages.css'
import ImgCat from '../img/3/cat.jpg';
import ImgDog from '../img/3/dog.jpg';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const imgVariants = {
  hover: {
    scale: 1.2,

  },

}
const Main = () => {
  return (
    <Fragment>
      <div className="main-page-nav ">
        <div className="main-page-nav-img dogs">
          <Link to='/dogs'>
            <motion.img src={ImgDog}
              variants={imgVariants}
              whileHover="hover"
              transition={{
                default: { duration: 5 }
              }}
            />
            <h2 className="main-title">DOGS</h2>
            <div className="main-btn">VIEW</div>
          </Link>
        </div>


        <div className="main-page-nav-img cats">
          <Link to='/dogs'>
            <motion.img src={ImgCat}
              variants={imgVariants}
              whileHover="hover"
              transition={{
                default: { duration: 5 }
              }}
            />
            <h2 className="main-title">CATS</h2>
            <div className="main-btn">VIEW</div>
          </Link>
        </div>
      </div>


      <Footer />
    </Fragment >
  )
}

export default Main
