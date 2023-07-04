import React, { StrictMode } from 'react';
// import { SearchForm } from './features/SearchForm';
// import { useFetchJobs } from './features/useFetchJobs';
// import { ApiCall } from './features/apiCall.jsx';



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
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h3>Search Results</h3>
            <p>Search results will appear here.</p>
          </div>
          <div className="col-sm">
            <h3>Job Details</h3>
            <p>Job details will appear here.</p>


          </div>
        </div>
      </div>

      
    
    </>
  );
};



export default Search;