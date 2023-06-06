import React from 'react';

export default function JobsList({ props }) {

  const displayJobs = (props) => {
    const { menu, jobs } = props;
    
    if (jobs.length > 0) {
      return (
        jobs.map((job, index) => {
          console.log(job);
          return (
            <div className='job' key={job.id}>
              <h3 className="job_title">{job.title}</h3>
              <p className="job_description">{job.description}</p>
              <span className="job_location">{job.location}</span>
              <span className="job_salary">{job.salary}</span>
              <span className="job_fadeOut"></span>
            </div >
            
          )
        })
      )
    } else {
      return (<h3>No job search results available.</h3>)
    }
  }

  return (
    <>
      {displayJobs(props)}
    </>
  )
}