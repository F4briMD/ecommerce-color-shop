import { useForm } from "react-hook-form"


export default function Validacionform() {


  const { register, formState: { errors }, handleSubmit } = useForm();


  return (
    <main>
      <div className="main-registro">
        <form onSubmit={handleSubmit((data) => {
          console.log(data)
        })}>
          <h1>Register</h1>
          <div>
            <label className="textlabel">Usuario</label>
            <input type="text" className="form-input" {...register('usuario', {
              required: true,
              minLength: 3,
              maxLength: 10,
            })} />
            {errors.usuario?.type === 'required' && <p className="error_form">El campo es requerido</p>}
            {errors.usuario?.type === 'minLength' && <p className="error_form">minimo 3 caracteres</p>}
            {errors.usuario?.type === 'maxLength' && <p className="error_form">maximo 10 caracteres</p>}
          </div>
          <div>
            <label className="textlabel">Nombre</label>
            <input type="text" className="form-input" {...register('nombre', {
              required: true,
              minLength: 3,
              pattern:/^[a-zA-Z]+$/
            })} />
            {errors.nombre?.type === 'required' && <p className="error_form">El campo es requerido</p>}
            {errors.nombre?.type === 'minLength' && <p className="error_form">minimo 3 caracteres</p>}
            {errors.nombre?.type === 'pattern' && <p className="error_form">no valido</p>}
          </div>
          <div>
          
            <label className="textlabel">Email</label>
            <input type="email" className="form-input" {...register('email', {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })} />
            {errors.email?.type === 'required' && <p className="error_form">El campo es requerido</p>}
            {errors.email?.type === 'pattern' && <p className="error_form">Email invalido</p>}
          </div>
          <div>
            <label className="textlabel">Contranseña</label>
            <input type="password" className="form-input" {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 15
            })} />
            {errors.password?.type === 'required' && <p className="error_form">El campo es requerido</p>}
            {errors.password?.types === 'minLength' && <p className="error_form">minimo 6 caracteres</p>}
            {errors.password?.type === 'maxLength' && <p className="error_form">maximo 15 caracteres</p>}
          </div>
          
          <button  type="submit" className="btn-form">Enviar</button>
        </form>
      </div>
    </main>
  )
}