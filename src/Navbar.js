import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://checkout.advancedshippingmanager.com/wp-content/uploads/2015/10/Cart-Icon-PNG-Graphic-Cave-e1461785088730-200x200.png" alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 60
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 4px',
    position: 'absolute',
    right: 0,
    top: -5
  }
};

export default Navbar;