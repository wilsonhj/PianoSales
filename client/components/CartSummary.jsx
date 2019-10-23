import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

export default function CartSummary(props) {
  return (
    <div className="container ">
      <div className="row justify-content-between pt-4">
        <button className="btn btn-link justify-content-start" onClick={() => props.view('catalog', {})}>Back to catalog</button>
        <h5 className="m-3">My Cart</h5>
      </div>
      <div className="row justify-content-center">
        {props.cart.map(cartItem => <CartSummaryItem key={cartItem.id} image={cartItem.image}
          name={cartItem.name} price={cartItem.price} shortDescription={cartItem.shortDescription}>
        </CartSummaryItem>)}
      </div>
      <div className="row justify-content-around">
        <h5 className="card-footer d-flex justify-content-start">Item Total ${props.cart.reduce((total, obj) => {
          return parseInt(obj.price, 10) + parseInt(total, 10);
        }, 0)}</h5>
        <button className="btn btn-success d-flex justify-content-end" onClick={() => props.view('checkout', {})}>Checkout</button>
      </div>
    </div>
  );
}
