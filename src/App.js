import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";



function App() {
  const [products, setCartItem] = useState(
    [
      {
        price: 199,
        title: 'Watch',
        qty: 1,
        id: 1
      },
      {
        price: 9999,
        title: 'Mobile Phone',
        qty: 1,
        id: 2
      },
      {
        price: 49999,
        title: 'Laptop',
        qty: 1,
        id: 3
      }
    ]
  );
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const handleIncreaseQuantity = (product) => {
    let index = products.findIndex(p => p.id === product.id);
    const updatedProducts = [...products];
    updatedProducts[index].qty += 1;

    setCartItem (updatedProducts);
  }
  const handleDecreaseQuantity = (product) => {
    let index = products.findIndex(p => p.id === product.id);
    const updatedProducts = [...products];
    if(updatedProducts[index].qty === 0)
    {
      return;
    }
    updatedProducts[index].qty -= 1;

    setCartItem (updatedProducts)
  }
  const handleDelete = (id) => {
    const items = products.filter((item) => item.id!==id);

    setCartItem(items)
  }
  const getCartCount = () => {
    let count = 0;
    products.forEach((product) => {
      count+= product.qty;
    })
    return count;
  }
  const getCartTotal = () => {
    let totalPrice = 0;
    products.map((product) => {
      totalPrice += (product.price*product.qty);
    })
    return totalPrice;
  }
  const handleAddItem = () => {
    setCartItem([...products, { title : newItem , price: newPrice ,qty : 1, id : products.length+1}]);
    setNewItem('');
    setNewPrice('');
  };
  return (
    <>
    <Navbar count={getCartCount()}/>
    <input
        type="text"
        placeholder="Add item..."
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <input
        type="number"
        placeholder="Price..."
        value={newPrice}
        onChange={(event) => setNewPrice(event.target.value)}
        />
      <button onClick={handleAddItem}>Add</button>
    <Cart
      products={products}
      onIncreaseQuantity={handleIncreaseQuantity}
      onDecreaseQuantity={handleDecreaseQuantity}
      onDelete={handleDelete}
      />
    <div style={{marginTop : '20px' , fontSize: 20 }}> TOTAL : Rs. {getCartTotal()}</div>
    </>
  );
}

export default App;