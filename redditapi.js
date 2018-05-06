export default {
  search: function(searchTerm, searchLimit, sortBy) {
    console.log('in search function');
    return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
    .then(res => res.json())
    .then(data => data.data.children.map(data => data.data))
    .catch(err => console.log(err));
  }
};
