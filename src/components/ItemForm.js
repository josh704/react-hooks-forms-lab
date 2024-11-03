import React, { useState } from "react";
import { v4 as uuid } from "uuid"; 

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    setItemName(""); 
    setItemCategory("Produce"); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item-name">Name</label>
      <input 
        id="item-name"
        type="text" 
        value={itemName} 
        onChange={handleNameChange} 
        placeholder="Item name" 
        required 
      />
      <label htmlFor="item-category">Category</label>
      <select 
        id="item-category" 
        value={itemCategory} 
        onChange={handleCategoryChange}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;