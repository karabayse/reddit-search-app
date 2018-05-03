// alert('in index.js');

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Add Event Listener
searchForm.addEventListener('submit', e => {
  console.log('in searchForm');
  // Get Search Term
  const searchTerm = searchInput.value;
  console.log(searchTerm);
  // Get Sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  console.log(sortBy);
  // Get Limit
  const searchLimit = document.getElementById('limit').value;
  console.log(searchLimit);
  e.preventDefault();
});
