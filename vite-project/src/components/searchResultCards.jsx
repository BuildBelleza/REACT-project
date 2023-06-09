import React from 'react';
import Card from '@mui/material/Card';
import searchForm from '../components/searchForm.jsx';

const SearchResultCards = ({ data }) => {
  const cards = data.map((card) => {
    return (
      <Card key={card.id}>
        <h2>{card.title}</h2>
        <p>{card.company}</p>
        <p>{card.location}</p>
        <p>{card.description}</p>
      </Card>
    );
  });


  return <div className="y-cards">{cards}</div>;
  // render(); {
  //   return (
  //     <div>
  //       <h1>Search Results:</h1>
  //       <div className="y-cards">{cards}</div>
  //     </div>
    // );
  };

// };





export default SearchResultCards;