import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import { MovieDetails } from '../components/MovieDetails';

import NavBar from '../components/NavBar';

const DashboardRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/navBar' element={<NavBar />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
                </Routes>
        </>
    )
}

export default DashboardRouters;