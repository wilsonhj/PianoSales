import React from 'react';
import CartSummaryItem from './cart-summary-item.jsx';

export default function CartSummary(props) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4">
          <button className="btn btn-link justify-content-start" onClick={() => props.view('catalog', {})}>Back to catalog</button>
          <h5 card-header>My Cart</h5>
        </div>
      </div>
      <div className="row">
        {props.cart.map(cartItem => <CartSummaryItem key={cartItem.id} image={cartItem.image}
          name={cartItem.name} price={cartItem.price} shortDescription={cartItem.shortDescription}>
        </CartSummaryItem>)}
      </div>
      <div className="row justify-content-between">
        <h5 className="card-footer d-flex justify-content-start">Item Total ${props.cart.reduce((total, obj) => {
          return obj.price + total;
        }, 0)}</h5>
        <button className="btn btn-success d-flex justify-content-end" onClick={() => props.view('checkout', {})}>Checkout</button>
      </div>
    </div>
  );
}
