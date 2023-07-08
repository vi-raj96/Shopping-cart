import React from 'react';

const CartItem = (props) => {
    const { price, title , qty, id} = props.product;
    const { product , onDelete} = props;
    return (
      <div className="cart-item">
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{id}. {title}</div>
          <div style={ { color: '#777' } }>Rs. {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <button onClick={() => props.onIncreaseQuantity(props.product)}> + </button>
          <button onClick={() => props.onDecreaseQuantity(props.product)}> - </button>
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn.onlinewebfonts.com/svg/img_252744.png"
            onClick={() => onDelete(product.id)}
            />
        </div>
      </div>
    );
  }

export default CartItem;