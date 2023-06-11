import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './features/Apps';
import Header from './sectioning/header';
import Main from './sectioning/main';
import Footer from './sectioning/footer';
import { useState } from 'react';
import { Job } from './features/Job';
import { Pagination } from './features/Pagination';
import { SearchForm } from './features/SearchForm';
import { useFetchJobs } from './features/useFetchJobs';



// Anything on this file will show throughout the entire page set.

function App() {
  // const [jobs, setJobs] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    
      <div>
        
      </div>
      
      <div className="card">
        
        
      </div>
      
    </>
  )
}

export default App
