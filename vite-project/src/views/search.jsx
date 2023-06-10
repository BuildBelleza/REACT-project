import React, { StrictMode } from 'react';




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