import React from 'react'
import { useDispatch } from 'react-redux'
import { loginGoogle } from '../redux/actions/loginActions'
import { Carousel1 } from './Carousel'
import { Carousel, Container } from 'react-bootstrap';
import styled from 'styled-components';


const H1 = styled.h1`
    text-align: center;
`
const P = styled.p`
    text-align: center;
    padding: 1.5rem 0;
`
const ContenedorCentral = styled.div`
  display: flex;
  justify-content: center;
`

const Login = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <img src="https://res.cloudinary.com/dzkollux2/image/upload/v1652671306/Sprint3/logo-blockBuster_ueod8z.png" alt="logo block"></img>
        <div className="descripcion">
          <H1>Cientos de películas al alcance de un click</H1>
        </div>
        <Carousel1 />

        <div className="inicia-sesion">
          <P>Inicia sesión para usar nuestros servicios</P>
        </div>
        <ContenedorCentral>
          <button onClick={() => dispatch(loginGoogle())}>Sign in With Google</button>
        </ContenedorCentral>
      </div>
    </>
  )
}

export default Login