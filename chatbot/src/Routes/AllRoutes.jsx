import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatPage from './../pages/ChatPage/ChatPage';
import HomePage from './../pages/HomePage/HomePage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default AllRoutes