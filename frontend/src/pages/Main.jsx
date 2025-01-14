import React, { useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow-right.svg';
import FilterProducts from '../components/FilterProducts';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import Care from '../components/Care';
import SocialNetwork from '../components/SocialNetwork';
import Footer from '../components/Footer';
import accordionItemsHome from '../data/dataAccordionHome';

function Main() {
  const [visibleCards, setVisibleCards] = useState(4);

  return (
    <div>
      <Carousel />
      <h1 className="text-center mb-4 mt-12 text-4xl font-bold md:text-xl 2xl:text-4xl 2xl:mt-10" style={{ color: "#3C2046" }}>Nuestros lentes de contacto</h1>
      <FilterProducts />
      <div className="flex justify-around m-12 mb-8 mt-24 items-center md:m-12 2xl:m-32 2xl:mb-16">
        <h2 className="text-left font-semibold text-3xl md:text-2xl 2xl:text-5xl" style={{ color:"#3D3D3D" }} id="productos">Productos</h2>
        <Link to="/products" className="flex items-center text-500 mr-4 hover:font-semibold hover:underline text-2xl md:text-xl 2xl:text-3xl">
          Ver más
          <img className="ml-2"src={arrow} alt="icono arrow del carrusel" />
        </Link>
      </div>
      <div className="mb-4">
        <Card limit={visibleCards} />
      </div>
      <div className="flex justify-around m-12 mb-8 mt-24 items-center md:m-12 2xl:m-32 2xl:mb-16">
        <h2 className="text-left font-semibold text-3xl md:text-2xl 2xl:text-5xl" style={{ color:"#3D3D3D"}}>Productos de cuidados</h2>
        <Link to="/products" className="flex items-center text-500 mr-4 hover:font-semibold hover:underline text-2xl md:text-xl 2xl:text-3xl" >
          Ver más
          <img className="ml-2" src={arrow} alt="icono arrow del carrusel" />
        </Link>
      </div>
      <div className="mb-4">
        <Card limit={visibleCards} categoryFilter="Product" />
      </div>
     
      <div className="flex justify-around m-12 mb-8 mt-24 ml-24 items-center md:m-4 2xl:m-24 2xl:mb-16">
      <h2 className="text-left  font-semibold text-3xl md:text-2xl 2xl:text-5xl" style={{color:"#3D3D3D" }}id="cuidados">Cuidados</h2>
        <div></div>
      </div>
      <Care />
  
      <Accordion accordionItems={accordionItemsHome} showDownloadLink={true} id="faq"/>
      <h2 className="text-center mb-10 mt-16 text-3xl ml-4 font-semibold md:text-2xl md:mb-0 2xl:text-4xl 2xl:mt-24 2xl:mb-6" style={{ color:"#3D3D3D"}}>¡Echa un vistazo a cómo lucen los productos en nuestros Noxi clientes!</h2>
      <SocialNetwork />
      <Footer />
      
    </div>
  );
}

export default Main;
