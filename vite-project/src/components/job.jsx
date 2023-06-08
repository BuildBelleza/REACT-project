import { useEffect, useState } from 'react';
import JobList from './jobList';
import axios from 'axios';

export default function Parent() {
  const [jobs, getJobs] = useState('');
  const url = 'https://jsonplaceholder.typicode.com/postshttps://job-board-search-fastapply.p.rapidapi.com/us/snagajob/fetchjobs';
  
  useEffect(() => {
    getAllJobs();
  }, []);
  
  const getAllJobs = () => {
    axios.get(`${url}/past`)
      .then((response) => {
        const allJobs = response.data.jobs.allJobs;
        getJobs(allJobs);
      })
      .catch(error => console.error(`Error: ${error}`));
  }
  return (
    <JobList jobs={jobs} />
  );
}


  
