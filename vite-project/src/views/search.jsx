import React, { StrictMode } from 'react';
// import { jobsFetch } from './features/jobsSlice';


const Search = () => {
  return (
    <>
      
      <br />
    <form action="/search" method="get">
      
        <br />

      <input
        type="text"
        id="header-search"
        placeholder="Search jobs"
        name="s"
        />
        <button className='sbtn' type="submit">Get It!</button>
        
        
      </form>
      <br /><br />
      <p>
        Search Criteria:
        <br /><br />
          Search by job title, company name, or location. 
</p>
    </>
  );
};



export default Search;