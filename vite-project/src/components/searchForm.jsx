const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const searchResults = document.querySelector('.search-results');
const searchResultsList = document.querySelector('.search-results-list');
// Components are different units or individual machines that can be used in different locations of the app as needed. Seperate items with usability features for me.

const searchFormHandler = async (e) => {
  e.preventDefault();
  const searchInputValue = searchInput.value;
  const searchQuery = searchInputValue.trim(ApiCall);
  if (searchQuery === '') return;
  const searchResultsData = await fetchSearchResults(searchQuery);
  renderSearchResults(searchResultsData);
}
