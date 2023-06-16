import React from 'react';



const ApiCall = () => {
  const fetchCall = async () => {
    const url = 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=developer';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fa96c64051mshe57b38479c7104bp161232jsn5416a889dc93',
        'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  
  return (
   <div>
          <button onClick={fetchCall}>Search</button>
          
    </div> 
  );
}

export default ApiCall;