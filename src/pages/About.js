import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/header/Header';
import Showcase from '../img/dog-and-cat.png'

const About = () => {
  return (
    <div>
      <Header />
      <div className="container about">
        <div className="showcase">

        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima voluptatibus eligendi repellendus eaque ad earum rerum voluptatum. Facilis, debitis earum culpa doloribus quo aperiam molestiae hic quaerat repellat delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <h1>Our Contacts:</h1>
        <ul className="about-contacts">
          <li>pnone number:<span></span> 123-45-66</li>
          <li><span>email adress:</span> ururu@gmail.com</li>
          <li><span>adress:</span> Saint Peterburg</li>
        </ul>
        <YMaps>
          
            <Map defaultState={{ center: [59.93, 30.31], zoom: 10 }} 
            style={{height:'50vh',
            paddingBottom: '8rem'
            }} />
          
        </YMaps>
      </div>
      
      <Footer />
    </div>
  )
}

export default About
