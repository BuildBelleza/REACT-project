import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <main className="y-wrap">
      <h1>TrackThis</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/appliedTo" element={<AppliedTo />} />
      </Routes>
    </main>
  );
};

export default Main;