import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {

  const { register, formState: { errors }, handleSubmit } = useForm();




  return (
    <div>
      {/*<main className="container-register">*/}

      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })} className="main-login">
        <h1 className="title-login">Login/sig up</h1>
        <div>
          <label className="textlabel" htmlFor="">Usuario</label>
          <input className="login-input" type="text" {...register('usuario', {
            required: true,
          })} />
          {errors.usuario?.type === 'required' && <p className="error_login">El Campo es obligatorio</p>}
        </div>
        <div>
          <label className="textlabel" htmlFor="">Contraseña</label>
          <input className="login-input" type="password" {...register('password', {
            required: true,
          })} />
          {errors.password?.type === 'required' && <p className="error_login">El Campo es obligatorio</p>}
          <a href="#"><p className="passw">Has olvidado tu Contraseña?</p></a>
        </div>
        <button className="btn-login">Login</button>
      </form>
   
      {/*</main>*/}
    </div>
  )
}
