import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

export default function CartSummary(props) {
  console.log(props.cart, "cart");
  return (
    <div className="container p-4">
      <button className="btn btn-link mb-3" onClick={() => props.view('catalog', {})}>Back to catalog</button>
      <h5 card-header>My Cart</h5>
      {props.cart.map(cartItem => <CartSummaryItem key={cartItem.id} image={cartItem.image}
        name={cartItem.name} price={cartItem.price} shortDescription={cartItem.shortDescription}>
      </CartSummaryItem>)}
      <h5 className="card-footer">Item Total ${props.cart.reduce((total, obj) => {
        return obj.price + total;
      }, 0)}</h5>
    </div>
  );
}
