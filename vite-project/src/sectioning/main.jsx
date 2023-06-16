import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../views/landing.jsx';
import Favorites from '../views/favorites.jsx';
import Search from '../views/search.jsx';
import AppliedTo from '../views/appliedTo.jsx';
import ApiCall from '../features/apiCall.jsx';


const Main = () => {
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Landing />} />   
        <Route path="/favorites" element={<Favorites />} />  
        <Route path="/search" element={<Search />} />
        <Route path="/appliedTo" element={<AppliedTo />} />
        <Route path="/apiCall" element={<ApiCall />} />
      </Routes>
    </main>
  );
};

export default Main;