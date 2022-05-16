import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';

const DashboardRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/navBar' element={<NavBar />} />
                <Route path="*" element={<Navigate to="/" />} />
                </Routes>
        </>
    )
}

export default DashboardRouters;