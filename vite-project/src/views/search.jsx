import React, { StrictMode } from 'react';
// import { SearchForm } from './features/SearchForm';
// import { useFetchJobs } from './features/useFetchJobs';



const Search = () => {
  return (
    <>
      
      <br />
     
    <form action="/search" method="get">
      
        <br />

        <input
        className='search'
        type="text"
        id="header-search"
        placeholder="Search jobs"
        name="s"
        /><br />
        <button className='search sbtn' type="submit">Go get it!</button>
        <br />
        
        
      </form>
      <br /><br />
      <p>
        Search Criteria:
        <br /><br />
        Search by job title, company name, or location. 
       
        <SearchForm />
<useFetchJobs />

    
         
      </p>
      
    
    </>
  );
};



export default Search;