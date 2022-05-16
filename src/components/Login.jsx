import React from 'react'
import { useDispatch } from 'react-redux'
import { loginGoogle } from '../redux/actions/loginActions'
import { Carousel1 } from './Carousel'
import { Carousel, Container } from 'react-bootstrap';

const Login = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <img src="https://res.cloudinary.com/dzkollux2/image/upload/v1652671306/Sprint3/logo-blockBuster_ueod8z.png" alt="logo block"></img>
        <div className="descripcion">
          Cientos de películas al alcance de un click
        </div>
        <Carousel1 />

        <div className="inicia-sesion">
          Inicia sesión para usar nuestros servicios
        </div>
        <div>
          <button onClick={() => dispatch(loginGoogle())}>Sign in With Google</button>
        </div>
      </div>
    </>
  )
}

export default Login