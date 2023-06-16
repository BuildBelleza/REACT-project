import React, { useState } from 'react';
// import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import Pagination from './Pagination';
import SearchForm from './SearchForm';
import  ApiCall  from './apiCall.jsx';

export default function Apps() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  // const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
  
    <button onClick={ApiCall}>Search</button>
  );
 
   
  
  
};

