import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([
    { name: 'Apples', price: 1.99 },
    { name: 'Bananas', price: 0.99 },
    { name: 'Oranges', price: 2.49 }
  ]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, { name: newItem, price: 0 }]);
    setNewItem('');
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems(items.filter((item, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add item..."
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default ShoppingList;