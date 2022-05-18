import React from 'react'
import NavBar from './NavBar'
import movie from './movie.json'
import styled from 'styled-components';


const DetailsContainer = styled.div`
    display: flex;
`



export const MovieDetails = () => {
    const movie2 = movie
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie2.poster_path;
  return (
      <div>
    <NavBar />
        <h1>Movie Details</h1>
        <img src={imageUrl} alt={movie.title}/>
        <p>Title:{movie.title}</p>
        <p>Overview:{movie.overview}</p>

    </div>
  );
}

