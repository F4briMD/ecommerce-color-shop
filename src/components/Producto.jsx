import React from 'react'
import { Link } from 'react-router-dom'

function Producto({ id, title, price, category, description, image }) {

    return (

        <div className="container-products">
            <div className="card-product">
                <div className="container-img">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="info-product">
                <h4>{title}</h4>
                <p className="price">$ {price}</p>
            </div>
            <Link className="btn-product" to={`/productos/${id}`}>Comprar Ahora</Link>
        </div>

    )
}

export default Producto
