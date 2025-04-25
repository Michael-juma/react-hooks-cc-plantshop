import React, { useState } from "react";

function Search({ onSearchResults }) {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);

    fetch(`http://localhost:6001/plants?q=${newQuery}`)
      .then((r) => r.json())
      .then((data) => onSearchResults(data));
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
