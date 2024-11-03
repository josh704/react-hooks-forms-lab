import React from "react";

function Filter({ selectedCategory, onCategoryChange, searchText, onSearchChange }) {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="Filter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <input
        type="text"
        placeholder="Search items..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;