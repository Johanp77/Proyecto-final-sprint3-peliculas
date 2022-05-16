import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyP = styled.p`
color: pink;
font-size: 1.2rem;

`;

const Li = styled.li`
    list-style: none;
    text-align: center;
`;

const Img = styled.img`
    border-radius: 10px;
    background-color: azure;
    width: 220px;
    height: 330px;
    transition: 0.5s;
    @media (max-width: 560px) {
        width: 90%;
        height: auto;
    }
    &:hover {
        opacity: 0.7;
    }
    `

const MovieCard = ({className, movie}) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return<Li>
        <Link to={`/movies/${movie.id}`}>
        <Img className={styled.className} src={imageUrl} alt={movie.title}/>
        <MyP>{movie.title}</MyP>
        </Link>
        </Li>
}



const StyledCard = styled(MovieCard)`
return img {
    width: 2px;
}
    color: palevioletred;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        padding: 0;
    }
    p{
        font-size: 1.2rem;
    }
    background-color: red;
    img{
        width: 2px;
    }
    
`;

 export default StyledCard
