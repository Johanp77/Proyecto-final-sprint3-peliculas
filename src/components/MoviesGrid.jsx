import StyledCard from './MovieCard';
import movie from './movie.json';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    grid-template-columns: repeat(auto-fill, 230px);
    gap: 40px;
    padding: 40px;
    justify-content: center;
    @media (max-width: 560px) {
    grid-template-columns: 100%;
        
    }
`

const MoviesGrid = () => {
    return (
        <Ul>
            {
            movie.map(movie => (
                <StyledCard key={movie.id} movie={movie} />
            ))
            }
        </Ul>
    )
}

export default MoviesGrid;