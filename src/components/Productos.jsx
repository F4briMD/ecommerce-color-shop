import React from "react";
import { useState, useEffect } from "react";
import Carga from "./Carga";
import Producto from "./Producto";

export default function Productos() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    /*const [buscar,setBuscar]=useState('')*/

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(resultado => resultado.json())
                .then(data => {

                    setProductos(data)
                    setLoading(false)
                })
        },
        []
    );

    /*const handleChangeBuscar=(event)=>{
        setBuscar(event.target.value)
    }*/

    if (loading) {
        return (
            <div><Carga/></div>
        )

    } else {
        return (
            <div>
                <div className="img-tienda">
                    {/*<h1 className="text-tienda">Nuesta Tienda</h1>*/}
                </div>
                
                <div className="main-container">
                    {productos.map(product => <Producto id={product.id} title={product.title} price={product.price} category={product.category} description={product.description} image={product.image} />)}
                </div>
            </div>



        )
    }

} 