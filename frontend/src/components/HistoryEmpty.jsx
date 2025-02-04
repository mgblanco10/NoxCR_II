import React from 'react';
import { getOrders, getOrderLines } from '../services/apiOrders/ApiOrders';
import iconHistory from '../assets/iconHistory.svg'
import { Link } from 'react-router-dom'

function HistoryEmpty() {
  return (
   <div className=''>
    <div className='text-center '>
    <div className='w-full flex justify-center my-10'>
        <img className='' src={iconHistory} alt="icono historial" />
    </div>
    <div className='my-10'>
    <span >¡ POR AHORA NO TIENES HISTORIAL DE PEDIDOS !</span>
    </div>
    <p className='my-10'>Puedes echarle un vistazo al catalogo y así poder elejir las lentes que mas se amoldan a cada ocasión.</p>
    
    <Link
            to="/products"
            className=" mt-8  bg-black py-1.5 px-3 font-medium text-white text-center"
            style={{ textDecoration: "none" }}
          >
            Ver catálogo
          </Link>
          
          </div>

   </div>
  );
}

export default HistoryEmpty;
