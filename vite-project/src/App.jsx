import { useState } from 'react'
import './App.css' 
import { fetchJobs } from './features/jobsSlice'
import Header from './sectioning/header'
import Main from './sectioning/main'
import Footer from './sectioning/footer'


// Anything on this file will show throughout the entire page set.

function App() {
  const [jobs, setJobs] = useState(0)

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
