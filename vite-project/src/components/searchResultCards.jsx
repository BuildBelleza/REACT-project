import React from 'react';
import Card from '@mui/material/Card';

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
}

export default SearchResultCards;