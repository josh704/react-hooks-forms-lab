import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import itemData from "../data/items";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const onItemFormSubmit = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={onDarkModeClick} />
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;