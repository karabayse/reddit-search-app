// Import RedditApi module
import reddit from './redditapi';

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
  // Check Input
  if(searchTerm === '') {
    // Show Message
    showMessage('Please add a search term', 'alert-danger');
    // Clear Input
    searchInput.value = '';
    // Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy);
  }
  e.preventDefault();
});

// Show Message Function
function showMessage(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const searchContainer = document.getElementById('search-container');
  // Get search
  const search = document.getElementById('search');
  // Insert message
  searchContainer.insertBefore(div, search);
  // Timeout alert
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
