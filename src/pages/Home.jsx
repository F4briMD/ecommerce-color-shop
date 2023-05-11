import React from "react";
import Carouselhome from "../components/Carouselhome";
import Cardsbts from "../components/Cardsbts";
export default function Home() {

  return (
    <div>
      <Carouselhome />
      <div className="container">
        <section className="text-home">
          <div>
            <h1 className="logo">Color Shop</h1>
            <br />
            <p>Nuestra compañía está comprometida con la satisfacción del cliente y la calidad de nuestros productos. Ofrecemos una amplia selección de productos a precios competitivos para satisfacer las necesidades de nuestros clientes. Nos esforzamos por ofrecer un excelente servicio al cliente y estamos dispuestos a ayudarle con cualquier problema o pregunta que pueda tener.</p>
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" alt="#" />
          </div>

        </section>
        <Cardsbts />
        <div className="text-bottom">
          <h1 className="logo-card">Color Shop</h1>
          
            <p>Somos una tienda online con mas de 10 años de experiencia, con más de 1.000 millones de productos nuevos y originales de las mejores marcas de Estados Unidos y del mundo entero. una experiencia de compra única desde la comodidad de tu casa, con una sola cuenta, todo en un solo lugar. Encuentra las últimas tendencias y productos novedosos, cómpralos online y te los enviamos por un servicio postal  para que lo recibas en tus manos, con todos los costos incluidos.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ab aliquam maiores aspernatur nostrum, eveniet sunt recusandae quod quam minima magnam fugiat, necessitatibus soluta architecto ducimus, voluptate earum animi. Culpa excepturi, quidem nobis temporibus eveniet eligendi perspiciatis magni. Doloribus, perspiciatis.</p>
          
        </div>
      </div>
    </div>





  )
}