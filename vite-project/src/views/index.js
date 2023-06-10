import Landing from "./landing";
import Search from "./search";
import Favorites from "./favorites";
import AppliedTo from "./appliedTo";
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
// This file merely translates my different views structuring overall for whatever is in the Views folder.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { Landing, Search, Favorites, AppliedTo };

const Sectioning = () => {
  return (
    <div>
      <Landing />
      <Search />
      <Favorites />
      <AppliedTo />
    </div>
  );
}

export default Sectioning;







