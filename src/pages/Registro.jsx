import React from "react"
import Validacionform from "../components/Validacionform"


export default function Registro() {

  return (
    <div>
    {/*<main className="container-register">*/}
        <div className="grid-register">
          <div className="img-register">
            <span>Registrate Para recibir informacion de nuestros productos</span>
          </div>
          <div className="valt-cont">
            <Validacionform/>
          </div>
        </div>
    {/*</main>*/}
    </div>
  )
}