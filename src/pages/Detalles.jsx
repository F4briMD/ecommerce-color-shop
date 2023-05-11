import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Carga from "../components/Carga";


export default function Detalles() {
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [mensaje, setMensaje] = useState('')


    const toggle = () => {
        const toggleShow = document.querySelector('.mensaje')
        toggleShow.classList.toggle('active')
    }
    const comprar = () => {
        toggle()
        setMensaje('Gracias por Comprar')
    }
    const carrito = () => {
        toggle()
        setMensaje('Agregado al Carrito')
    }
    useEffect(
        () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data)
                    setProducto(data)
                    setLoading(false)
                })
        },
        [id]
    );
    if (loading) {
        return (
            <div className="carga"><Carga /></div>
        )
    } else {
        return (
            
                <main className="container-detalles">
                    <div className="card-product-detalle">
                        <div className="container-detalle-img">
                            <img src={producto.image} alt={producto.title} />
                        </div>
                    </div>
                    <div className="info-product-detalle">
                        <span className="category">{producto.category}</span>
                        <h2>{producto.title}</h2>
                        <p className="description">{producto.description}</p>
                        <p className="price">$ {producto.price}</p>
                        <div className="btns">
                            <button className="btn-product" onClick={comprar}>Comprar</button>
                            <button className="btn-product" onClick={carrito}>Agregar Carrito</button>
                        </div>
                        <div className="cont-menj">
                            <span className="mensaje">{mensaje}</span>
                        </div>



                    </div>
                </main>
            
        )
    }
}

