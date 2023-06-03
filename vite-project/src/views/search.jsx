import React, { StrictMode } from 'react';
// import { jobsFetch } from './features/jobsSlice';


const Search = () => {
  return (
    <>
      <h1>Search Here:</h1>
      <br />
    <form action="/search" method="get">
      
        <br />

      <input
        type="text"
        id="header-search"
        placeholder="Search jobs"
        name="s"
        />
        <br />
        <button className='sbtn' type="submit">Search</button>
        
        
      </form>

    </>
  );
};



export default Search;