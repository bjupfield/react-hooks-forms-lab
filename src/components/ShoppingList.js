import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, changedatText] = useState("");
  const [selectCat, setSelectCat] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemarr, setItemArr] = useState([...items]);

  function onSelectCat(e){
    setSelectCat(e.target.value)
  }
  function onItemName(e){
    setItemName(e.target.value)
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e){
    changedatText(e.target.value)
  }
  function onItemFormSubmit(e){
    e.preventDefault()
    setItemArr([...itemarr, {
      id: uuid(),
      name: itemName,
      category: selectCat,
    }])
  }

  const itemsToDisplay = itemarr.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item)=>{
    return item.name.includes(search)
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemName = {onItemName} itemName = {itemName} onSelectCat = {onSelectCat} onItemFormSubmit = {onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search = {search} onSearchChange = {onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
