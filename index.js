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
    }
  // Clear Input
  searchInput.value = '';
  // Search Reddit
  reddit.search(searchTerm, searchLimit, sortBy)
    .then(results => {
      console.log(results);
      let output = '<div class="card-columns">';
      // Loop through posts
      results.forEach(post => {
        // Check for image using ternary operator
        // ? = if
        // : = else
        const image = post.preview  ? post.preview.images[0]
          .source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
        output += `
          <div class="card">
          <img class="card-img-top" src="${image}" alt="card imae cap">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateText(post.selftext, 100)}</p>
            <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
            <hr>
            <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
            <span class="badge badge-dark">Score: ${post.score}</span>
          </div>
        </div>
        `;
      });
      output += '</div>';
      document.getElementById('results').innerHTML = output;
    });

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

// Truncate Text
function truncateText(text, limit) {
  const shortened = text.indexOf(' ', limit);
  if(shortened == -1) return text;
  return text.substring(0, shortened);
}
