import React from "react";
function ItemForm({onSelectCat, itemName, onItemName, onItemFormSubmit}) {

  return (
    <form className="NewItem" onSubmit = {onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value = {itemName} onChange = {onItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange = {onSelectCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
