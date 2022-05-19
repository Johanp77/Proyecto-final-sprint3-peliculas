
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/loginActions'
import { Carousel1 } from './Carousel'
import MoviesGrid from './MoviesGrid'
import NavBar from './NavBar'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <>
    <NavBar />
    <Carousel1 />
    <MoviesGrid />
    {/* <button onClick={enviarFirestore()}></button> */}
    </>
  )
}

export default Home