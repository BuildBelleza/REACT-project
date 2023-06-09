import React, { StrictMode } from 'react';
import SearchResultCards from '../components/searchResultCards';
// import JobsList from '../components/jobList';



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
        <button className='sbtn' type="submit">Go get it!</button>
        
        
      </form>
      <br /><br />
      <p>
        Search Criteria:
        <br /><br />
        Search by job title, company name, or location. 

        <SearchResultCards />
         
      </p>
      
    
    </>
  );
};

{/* <JobsList /> */}

export default Search;